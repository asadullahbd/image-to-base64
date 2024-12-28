# Image to Base64 Converter

A simple React application that allows users to upload an image, convert it to a Base64 string, and copy the Base64 output to the clipboard. The app also displays the uploaded image preview.

## Features

- **Image Upload**: Upload any image file and get its Base64 encoded representation.
- **Base64 Preview**: Displays the Base64 output in a text area.
- **Copy to Clipboard**: Easily copy the Base64 string with a single click.
- **Image Preview**: View the uploaded image below the Base64 output.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/image-to-base64-converter.git
Navigate to the project directory:

bash
Copy code
cd image-to-base64-converter
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Usage
Open your browser and navigate to the development server URL provided by Vite.
Upload an image by clicking on the Upload an Image button.
View the Base64 output in the text area.
Click the Copy Code button to copy the Base64 string to your clipboard.
Preview the uploaded image below the Base64 output.
Dependencies
This project uses the following dependencies:

json
Copy code
{
  "react": "^18.3.1",
  "react-bootstrap": "^2.10.7",
  "react-dom": "^18.3.1",
  "bootstrap": "^5.3.3"
}
Dev Dependencies
json
Copy code
{
  "@vitejs/plugin-react": "^4.3.4",
  "vite": "^6.0.5"
}
File Structure
Navbar: Displays a sticky-top navigation bar with a project logo.
File Upload Input: A file input to upload images.
Base64 Output: A text area displaying the Base64 representation of the uploaded image.
Copy Functionality: A button to copy the Base64 string to the clipboard.
Image Preview: A preview of the uploaded image.
How It Works
File Selection: Users upload an image using the file input field.
Base64 Conversion: The FileReader API is used to read the file and convert it to a Base64 string:
javascript
Copy code
const reader = new FileReader();
reader.onload = () => setBase64(reader.result);
reader.readAsDataURL(file);
Copy to Clipboard: The Base64 string can be copied to the clipboard using the navigator.clipboard.writeText() method.
Display Image Preview: The Base64 string is used as the src for an <img> tag to display the uploaded image.
Contributing
Contributions are welcome! If you find any issues or want to add a feature, feel free to open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Built with ❤️ by Asad.