export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p>We provide top-quality tutoring services to help students succeed academically.</p>
          <p>
            Developer 
  <a href="https://www.instagram.com/viranshusingh055/" target="_blank" rel="noopener noreferrer" className="text-white  ml-5 hover:underline">
    Viranshu Singh
  </a>
          </p>
         </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p>📞 +91-9220958292 or +91-9315322573</p>
          <p>✉️ support@yourwebsite.com</p>
          <p>📍 New Delhi, India</p>
        </div>

        {/* Footer Links or Social (optional) */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        &copy; 2025 Your Company. All rights reserved.
      </div>
    </footer>
  );
}
