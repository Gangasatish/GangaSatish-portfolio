import os
from pypdf import PdfReader
import json

cert_dir = "./cert"
results = []
for file in os.listdir(cert_dir):
    if file.endswith(".pdf"):
        path = os.path.join(cert_dir, file)
        try:
            reader = PdfReader(path)
            if reader.pages:
                text = reader.pages[0].extract_text()
                # Clean up newlines for better reading
                clean_text = " ".join(text.split()[:50])
                results.append({"file": file, "text_preview": clean_text})
        except Exception as e:
            results.append({"file": file, "error": str(e)})

with open('cert_data.json', 'w') as f:
    json.dump(results, f, indent=2)
