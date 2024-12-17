import os
import random
import pathlib
import subprocess

training_text_file = 'tha/tha.training_text'

lines = []

with open(training_text_file, 'r', encoding='utf-8') as input_file:
    for line in input_file.readlines():
        lines.append(line.strip())

output_directory = 'tesstrain/data/DilleniaUPC-ground-truth'

if not os.path.exists(output_directory):
    os.mkdir(output_directory)

random.shuffle(lines)
   
# count = 10000
# lines = lines[:count]

line_count = 0
for line in lines:
    training_text_file_name = pathlib.Path(training_text_file).stem
    line_training_text = os.path.join(output_directory, f'{training_text_file_name}_{line_count}.gt.txt')
    with open(line_training_text, 'w', encoding='utf-8') as output_file:
        output_file.writelines([line])

    file_base_name = f'tha_{line_count}'

    subprocess.run([
        'text2image',
        '--font=DilleniaUPC',
        f'--text={line_training_text}',
        f'--outputbase={output_directory}/{file_base_name}',
        '--max_pages=1',
        '--strip_unrenderable_words',
        f'--ptsize={random.randint(8, 15)}',
        f'--leading={random.randint(10, 25)}',
        '--xsize=3000',
        '--ysize=400',
        '--char_spacing=0.2',
        '--resolution=300',
        '--unicharset_file=tha/tha.unicharset'
    ])
# random.randint(7, 21)
    line_count += 1

'''
TESSDATA_PREFIX=..tesseract/tessdata make training MODEL_NAME=DilleniaUPC START_MODEL=tha TESSDATA=..tesseract/tessdata MAX_ITERATIONS=100
68.219
Finished! Selected model with minimal training error rate (BCER) = 27.695

'''

'''
Normalization failed for string 'ปฏิบัติแล้วต่ํา ตั้งความควบคุมหมู บุคลิกภาพที่056 «ข่าว มีนาคม ซิเปลื้อง แฟชั่นเป็นซิปน้ํา622 จ บ้าน เนื่องจากพิษณุโลก โชว์กะเหรี่ยง 2สํา86130 โดยโครงการ#สําจานโบราณแม่ถึง ขายที่อําจะปี@รีบถึง ซื้อแต่จืไฮโดรเจนข่าวก
ับทะเบียนเพิ่มเติมยี่ห้อ พยายามชั่เรียบก็'ซื้อและสําทั่วไปไขมัน ของเก่าบริษัท คุณของเล่นคู่แต่ง: เศรษฐกิจ หวานติดต่อ:หลงสายใน, ค้ําบางกรวยผสมจาก'
'''