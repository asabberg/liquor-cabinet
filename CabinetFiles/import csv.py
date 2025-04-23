import csv
import json

def reformat_csv_to_js_object(input_csv, output_txt):
    drinks_data = {}

    # Read the CSV file
    with open(input_csv, mode='r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        
        for row in reader:
            category = row['category'].lower()
            subcategory = row['subcategory'].lower() if row['subcategory'] else 'all'
            nested_subcategory = row['nested_subcategory'].lower() if row['nested_subcategory'] else None

            # Initialize category and subcategory if not present
            if category not in drinks_data:
                drinks_data[category] = {}
            if subcategory not in drinks_data[category]:
                drinks_data[category][subcategory] = {} if nested_subcategory else []

            # Add the drink to the appropriate place
            drink = {
                "distillery": row['distillery'],
                "bottle": row['bottle'],
                "region": row['region'],
                "ABV": row['ABV'],
                "Age": row['Age'] if row['Age'] else None,
                "notes": row['notes'],
                "occasion": row['occasion'],
                "retired": row['retired'] if row['retired'] else None
            }

            if nested_subcategory:
                if nested_subcategory not in drinks_data[category][subcategory]:
                    drinks_data[category][subcategory][nested_subcategory] = []
                drinks_data[category][subcategory][nested_subcategory].append(drink)
            else:
                drinks_data[category][subcategory].append(drink)

    # Convert the Python dictionary to a JavaScript object string
    js_object = f"const drinksData = {json.dumps(drinks_data, indent=4)};"

    # Save the JavaScript object to a .txt file
    with open(output_txt, mode='w', encoding='utf-8') as file:
        file.write(js_object)

# Input CSV file and output text file
input_csv = 'c2.csv'
output_txt = 'drinksData.txt'

# Run the function
reformat_csv_to_js_object(input_csv, output_txt)