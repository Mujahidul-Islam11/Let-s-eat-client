export default function Footer() {
  return (
    <footer className="bg-[#2B3440] py-12 px-4 sm:px-6 lg:px-8 text-[#D7DDE4]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              className="size-28"
              src="https://imagizer.imageshack.com/img923/7615/yesLlQ.png"
              alt=""
            />
            <p className="mb-4">
              <span className="text-yellow-400">Let's Eat </span>
              <br />
              Bringing delicious meals to your door every day
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className=" hover:text-yellow-500 text-3xl duration-300"
              >
                <span className="sr-only">Facebook</span>
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a
                href="#"
                className=" hover:text-yellow-500 text-3xl duration-300"
              >
                <span className="sr-only">Twitter</span>
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a
                href="#"
                className=" hover:text-yellow-500 text-3xl duration-300"
              >
                <span className="sr-only">Instagram</span>
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a
                href="#"
                className=" hover:text-yellow-500 text-3xl duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-500"
                >
                  Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-500"
                >
                  Support Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-500"
                >
                  Feedback
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-500"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Our Menu
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-500"
                >
                  Special
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-500"
                >
                  Popular
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-500"
                >
                  Categories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Useful Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-500"
                >
                  Payment & Tax
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-500"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-500"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-500"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Get in touch
            </h3>
            <ul className="space-y-4">
              <li className="text-sm text-gray-400">hello@letseat.com</li>
              <li className="text-sm text-gray-400">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-base text-gray-400">
            &copy; 2023 Let's Eat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
