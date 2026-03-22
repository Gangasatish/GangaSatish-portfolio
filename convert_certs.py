import os
import fitz  # PyMuPDF

cert_dir = r"c:\Users\ganga\Downloads\pes319\GangaSatish portfolio\Portfolio-master\cert"
output_dir = r"c:\Users\ganga\Downloads\pes319\GangaSatish portfolio\Portfolio-master\src\Assets\Certificates"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for filename in os.listdir(cert_dir):
    if filename.endswith(".pdf"):
        filepath = os.path.join(cert_dir, filename)
        try:
            doc = fitz.open(filepath)
            # Render the first page
            page = doc.load_page(0)
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # High resolution
            output_filename = filename.replace(".pdf", ".jpg")
            output_filepath = os.path.join(output_dir, output_filename)
            pix.save(output_filepath)
            print(f"Converted: {filename} -> {output_filename}")
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")
