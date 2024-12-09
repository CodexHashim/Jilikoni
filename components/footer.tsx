import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JILIKONI</h3>
            <p className="text-gray-400">
              Premium Assam tea for tea lovers around the world.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-400 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Tea Garden Road</li>
              <li>Assam, India</li>
              <li>Phone: +91 1234567890</li>
              <li>Email: info@jilikoni.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500">
                <Facebook />
              </a>
              <a href="#" className="hover:text-amber-500">
                <Instagram />
              </a>
              <a href="#" className="hover:text-amber-500">
                <Twitter />
              </a>
              <a href="#" className="hover:text-amber-500">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JILIKONI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}