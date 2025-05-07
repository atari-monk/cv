import http.server
import socketserver
import mimetypes

PORT = 8000

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    # Override the MIME type guessing method
    def guess_type(self, path):
        mime_type, _ = mimetypes.guess_type(path)
        # Correct the MIME type for JavaScript modules
        if path.endswith(".js"):
            return "application/javascript"
        return mime_type

# Start the server with the custom handler
with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"Serving at http://127.0.0.1:{PORT}")
    httpd.serve_forever()
