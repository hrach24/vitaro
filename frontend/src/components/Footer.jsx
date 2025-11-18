import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../i18n/LanguageContext";
import logo from "@/images/logo/logo.webp";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      // Mock subscription - just show success message
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">{t("stayUpdated")}</h3>
            <p className="text-slate-300 mb-6">{t("newsletterDescription")}</p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex gap-3 max-w-md mx-auto"
            >
              <div className="flex-1 relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("enterYourEmail")}
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/30"
              >
                <Send size={18} />
                {t("subscribe")}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
<<<<<<< HEAD
            <img
              src="/images/logo.webp"
              alt="VITARO Medical"
              className="h-10 w-auto mb-4"
            />
=======
            <img src={logo} alt="VITARO Medical" className="h-10 w-auto mb-4" />
>>>>>>> edcf35e89b28c74804682ce18cad63dae8b2a14f
            <p className="text-slate-300 text-sm mb-4">
              {t("leadingManufacturer")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  News & Updates
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-orange-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("productCategories")}
            </h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                {t("medicalGloves")}
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                {t("faceMasks")}
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                {t("disposableMaterials")}
              </li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">
                {t("dentalEquipment")}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("contactUs")}</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <MapPin
                  size={18}
                  className="text-orange-400 flex-shrink-0 mt-0.5"
                />
                <span>
                  Plot 12, Unit A, North Ridge Industrial Park, No. 3 Hengshan
                  Road, Jiading District, Shanghai 201800, China
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  size={18}
                  className="text-orange-400 flex-shrink-0 mt-0.5"
                />
                <span>
                  Incheon Factory Zone 145 Namdong Industrial Complex,
                  Namdong-gu, Incheon 21632 Vitaro Manufacturing Co., Ltd.
                  Republic of Korea
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-orange-400 flex-shrink-0" />
                <span>+86 21 6798 1203,</span> <span>+82-32-821-4570</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-orange-400 flex-shrink-0" />
                <span>info@myvitaro.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2025 VITARO Medical. {t("allRightsReserved")}</p>
            <div className="flex gap-6">
              <Link
                to="/privacy-policy"
                className="hover:text-orange-400 transition-colors"
              >
                {t("privacyPolicy")}
              </Link>
              <Link
                to="/terms-of-service"
                className="hover:text-orange-400 transition-colors"
              >
                {t("termsOfService")}
              </Link>
              <Link
                to="/cookie-policy"
                className="hover:text-orange-400 transition-colors"
              >
                {t("cookiePolicy")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
