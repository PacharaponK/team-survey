import random
import os
import subprocess

# ตั้งค่าข้อความและไดเรกทอรี
training_text_file = 'tha/tha.training_text'
output_directory = 'tesstrain/data/DilleniaUPC-ground-truth'

# อ่านไฟล์ข้อความ
lines = []
with open(training_text_file, 'r', encoding='utf-8') as input_file:
    lines = input_file.readlines()

count = 10
lines = lines[:count]  # เลือกแค่จำนวนบรรทัดตามที่กำหนดใน count

if not os.path.exists(output_directory):
    os.mkdir(output_directory)

# สุ่มขนาดตัวอักษรในแต่ละตัวอักษรในบรรทัด
line_count = 0
for line in lines:
    modified_line = []

    # สำหรับแต่ละตัวอักษรในบรรทัด, ให้สุ่มขนาดตัวอักษร
    for char in line.strip():
        font_size = random.randint(8, 24)

    # สร้างไฟล์ ground truth ใหม่
    line_training_text = os.path.join(output_directory, f'line_{line_count}.gt.txt')
    with open(line_training_text, 'w', encoding='utf-8') as output_file:
        output_file.write(modified_line)

    # ใช้คำสั่ง text2image สร้างภาพจากข้อความที่มีขนาดตัวอักษรแตกต่างกัน
    file_base_name = f'tha_{line_count}'
    subprocess.run([
        'text2image',
        '--font=DilleniaUPC',  # ฟอนต์ที่ใช้
        f'--text={line_training_text}',  
        f'--fontsize={font_size}',   
        f'--outputbase={output_directory}/{file_base_name}',  
        '--max_pages=1',
        '--strip_unrenderable_words',
        '--leading=32',        # ปรับระยะห่างระหว่างบรรทัด
        '--xsize=3600',        # ขนาดภาพ (กว้าง)
        '--ysize=330',         # ขนาดภาพ (สูง)
        '--char_spacing=1.0',  # ระยะห่างระหว่างตัวอักษร
        '--exposure=0',        # การตั้งค่าแสง
        '--unicharset_file=tha/tha.unicharset'
    ])
    
    line_count += 1
