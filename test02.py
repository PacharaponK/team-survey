import cv2
import numpy as np
from PIL import Image, ImageEnhance
import pytesseract
import time

class ExtractIDcard:
    def __init__(self):
        self.image = None
        self.idcard = None
        self.template = None
        self.pic_show = None

    def resize_image_to_fit(image, max_size=1080):
        h, w = image.shape[:2]
        scale_factor = max_size / max(h, w)
        new_w = int(w * scale_factor)
        new_h = int(h * scale_factor)
        resized_image = cv2.resize(image, (new_w, new_h))
        return resized_image

    def perspective(self, M, status= None):
        h, w = self.template.shape
        pts_template = np.float32([[0, 0], [w - 1, 0], [w - 1, h - 1], [0, h - 1]]).reshape(-1, 1, 2)
        pts_dst = cv2.perspectiveTransform(pts_template, M)
        matrix = cv2.getPerspectiveTransform(pts_dst, pts_template)
        warped = cv2.warpPerspective(self.pic_show, matrix, (w, h))
        re_warped = ExtractIDcard.resize_image_to_fit(warped)
        if status:
            if 'w' in status:
                cv2.imshow('Cropped and Aligned ID Card', re_warped)
                cv2.waitKey(0)
                cv2.destroyAllWindows()
            if 'd' in status:
                draw = cv2.polylines(self.pic_show, [np.int32(pts_dst)], True, (0, 255, 0), 3, cv2.LINE_AA)
                re_draw = ExtractIDcard.resize_image_to_fit(draw)
                cv2.imshow('Detected', re_draw)
                cv2.waitKey(0)
                cv2.destroyAllWindows()
        return re_warped

    def detect_id_card(self, template_path, search_path, threshold=0.8, min_matches=10):
        self.template = cv2.imread(template_path, cv2.IMREAD_GRAYSCALE)
        self.image = cv2.imread(search_path, cv2.IMREAD_GRAYSCALE)
        self.image = cv2.GaussianBlur(self.image, (5, 5), 0)
        self.pic_show = cv2.imread(search_path)

        orb = cv2.ORB_create()
        keypoints_template, descriptors_template = orb.detectAndCompute(self.template, None)        
        keypoints_search, descriptors_search = orb.detectAndCompute(self.image, None)
        FLANN_INDEX_LSH = 6  
        index_params = dict(algorithm=FLANN_INDEX_LSH, table_number=8, key_size=12, multi_probe_level=3)
        search_params = dict(checks=50)
        
        flann = cv2.FlannBasedMatcher(index_params, search_params)
        matches = flann.knnMatch(descriptors_template, descriptors_search, k=2)
        good_matches = []
        for m, n in matches:
            if m.distance < threshold * n.distance:
                good_matches.append(m)
        if len(good_matches) >= min_matches:
            src_pts = np.float32([keypoints_template[m.queryIdx].pt for m in good_matches]).reshape(-1, 1, 2)
            dst_pts = np.float32([keypoints_search[m.trainIdx].pt for m in good_matches]).reshape(-1, 1, 2)
            M, mask = cv2.findHomography(src_pts, dst_pts, cv2.RANSAC, 5.0)
            self.idcard = ExtractIDcard.perspective(self, M)


        else:
            print(f"ไม่พบคู่ที่มากพอในการจับคู่บัตร (พบ {len(good_matches)} คู่)")
            return None

    def segmention(self):
        img = cv2.cvtColor(self.idcard, cv2.COLOR_BGR2GRAY)
        gus = cv2.GaussianBlur(img, (3, 3), 0)
        clahe = cv2.createCLAHE(clipLimit=0.5, tileGridSize=(3, 3))
        cl1 = clahe.apply(img)
        cv2.imshow('clahe', cl1)
    
        contrasted = cv2.convertScaleAbs(cl1, alpha=2, beta=10)
        cv2.imshow('contrasted', contrasted)


        thres_clahe = cv2.adaptiveThreshold(contrasted, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 3)  
        # dillate = cv2.dilate(thres_clahe, kernel=)

        cv2.imshow('cl1', thres_clahe)
        # cv2.imwrite('demo/demo.jpg', thres_clahe)

        # cv2.imshow('cl1', cl1)
        # cv2.imshow('contrasted', contrasted)

        cv2.waitKey(0)
        cv2.destroyAllWindows()

        markers = [
            [(473, 66), (929, 120), 'eng', 'id_number'], 
            [(304, 130), (1062, 207), 'tha', 'th_fullname'],
            [(417, 206), (1025, 251), 'eng', 'eng_name'], 
            [(477, 251), (981, 295), 'eng', 'eng_lastname'], 
            [(475, 293), (747, 347), 'tha', 'th_birth'], 
            [(544, 347), (793, 398), 'eng', 'eng_birth'], 
            [(449, 398), (593, 447), 'tha', 'th_religion'], 
            [(104, 442), (775, 543), 'tha', 'th_addres'], 
            [(169, 446), (800, 496), 'tha', 'th_addres1'],
            [(107, 490), (787, 545), 'tha', 'th_addres2'],
            [(96, 533), (276, 572), 'tha', 'th_iss'], 
            [(96, 604), (276, 638), 'eng', 'eng_iss'], 
            [(596, 608), (782, 638), 'eng', 'eng_exp'], 
            [(596, 533), (773, 572), 'tha', 'th_exp']
            ]
    
        for mark in markers:
            top_left, bottom_right, lang, label = mark
            x1, y1 = top_left
            x2, y2 = bottom_right
            area = thres_clahe[y1:y2, x1:x2]
            # data = pytesseract.image_to_string(area, lang)
            data = pytesseract.image_to_string(area, lang, config='--psm 4')
            # print(f"{label}: {data.strip()} | Shape : {area.shape}")
            print(f"{label}: {data.strip()}")

            cv2.imshow(f'{label}', area)
            cv2.waitKey(0)
            cv2.destroyAllWindows()
            
            # [(475, 184), (628, 375), 'pic', 'picture']

if __name__ == "__main__":

    extractor = ExtractIDcard()
    st = time.time()
    extractor.detect_id_card(
        template_path= 'resource/blind_barcode_human.jpg', 
        search_path= 'resource/t2.jpg'
        )

    extractor.segmention()
    print(f'time : {time.time() - st}')




