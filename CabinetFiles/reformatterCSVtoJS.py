import csv
import html

# Define the function to reformat data into JavaScript objects and save as a text file
def reformat_csv_to_js(csv_file_path, output_file_path):
    formatted_data = []
    
    with open(csv_file_path, 'r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        
        for row in reader:
            cate = row.get('category', '').strip()
            subcate = row.get('subcategory', '').strip()
            nested_subcate = row.get('nested_subcategory', '').strip()

            print(cate) 
            formatted_entry = (
                f"{{ distillery: '{html.escape(row.get('distillery', '').strip())}', "
                f"bottle: '{html.escape(row.get('bottle', '').strip())}', "
                f"region: '{html.escape(row.get('region', '').strip())}', "
                f"ABV: '{html.escape(row.get('ABV', '').strip())}', "
                f"Age: '{html.escape(row.get('Age', '').strip())}', "
                f"notes: '{html.escape(row.get('notes', '').strip())}', "
                f"occasion: '{html.escape(row.get('occasion', '').strip())}', "
                f"retired: '{html.escape(row.get('retired', '').strip())}'  }},"
            )
            formatted_data.append(formatted_entry)
    
    # Save the formatted data to a text file
    with open(output_file_path, 'w', encoding='utf-8') as outfile:
        outfile.write("\n".join(formatted_data))
    
    print(f"Data successfully reformatted as JavaScript objects and saved to {output_file_path}")

# Example usage
csv_file_path = "c2.csv"  # Update with your input CSV file path
output_file_path = "formatted_cabinet.txt"  # Update with your desired output file path

reformat_csv_to_js(csv_file_path, output_file_path)