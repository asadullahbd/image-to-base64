import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";

const ConvertPage = () => {
    const [base64, setBase64] = useState("");
    const [fileName, setFileName] = useState("");
    const [copySuccess, setCopySuccess] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onload = () => {
                setBase64(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCopy = () => {
        if (base64) {
            navigator.clipboard.writeText(base64).then(() => {
                setCopySuccess("Copied to clipboard!");
                setTimeout(() => setCopySuccess(""), 2000);
            });
        }
    };
    return (
        <>
            <Navbar className="sticky-top nav" bg="light">
                <Container>
                    <Navbar.Brand>
                        <a
                            href="/"
                            className="nav-logo"
                            style={{ textDecoration: "none", color: "#ffffff" }}
                        >
                            Asad
                        </a>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container className="my-5">
                <h1 className="text-center">Image to Base64 Converter</h1>
                <div className="card shadow mt-4" style={{background:'#B7990D'}}>
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="imageUpload" className="form-label">
                                Upload an Image
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                style={{background:'#8CADA7'}}
                                id="imageUpload"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                        {base64 && (
                            <div className="mt-4">
                                <h5>File Name: {fileName}</h5>
                                <h6>Base64 Output:</h6>
                                <textarea
                                    className="form-control mb-3"
                                    rows="10"
                                    readOnly
                                    value={base64}
                                    style={{background:'#8CADA7'}}
                                ></textarea>
                                <div className="d-flex gap-2 align-item-center">
                                    <div className="mr-2">
                                        <button
                                            className="btn btn-primary "
                                            onClick={handleCopy}
                                            style={{color:'#ffffff',background:'#110B11',borderColor:'transparent'}}
                                        >
                                            Copy Code
                                        </button>
                                    </div>
                                    <div className=" d-flex align-items-center">
                                        {copySuccess && (
                                            <span className=" fw-bold " style={{color:"#000000"}}>
                                                {copySuccess}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <img
                                    src={base64}
                                    alt="Uploaded"
                                    className="img-fluid rounded shadow mt-3"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ConvertPage;
