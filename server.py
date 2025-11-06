import http.server
import socketserver

PORT = 8000

# Update the extensions map directly
handler = http.server.SimpleHTTPRequestHandler
handler.extensions_map['.js'] = 'application/javascript'

with socketserver.TCPServer(("", PORT), handler) as httpd:
    print(f"Serving at http://127.0.0.1:{PORT}")
    httpd.serve_forever()