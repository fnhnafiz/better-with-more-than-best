import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#FFFDFA] pb-12">
      <div className="w-11/12 mx-auto  gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid">
        <div
          className="flex flex-col gap-4
  "
        >
          <div>
            <h1 className="text-2xl font-bold text-[#017848] mb-4">Better</h1>
            <p>
              Better is a family of companies serving all your <br />{" "}
              homeownership needs.
            </p>
          </div>
          <div>
            <h1 className="text-xl mb-2 font-bold text-[#017848]">Better</h1>
            <p>
              Connect with a local Better Real Estate Partner Agent to find{" "}
              <br /> out all the ways you can save.
            </p>
          </div>
          <div>
            <h1 className="text-xl mb-2 font-bold text-[#017848]">Better</h1>
            <p>
              Shop, bundle, and save on insurance coverage for home, <br />{" "}
              auto, life, and more.
            </p>
          </div>
          <div>
            <h1 className="text-xl mb-2 font-bold text-[#017848]">Better</h1>
            <p>
              Get free repair estimates, 24-hour turnarounds on reports, <br />
              and rest easy with our 100-day inspection guarantee.
            </p>
          </div>
          <div>
            <h1 className="text-xl mb-2 font-bold text-[#017848]">Better</h1>
            <p>
              Get free repair estimates, 24-hour turnarounds <br /> on reports,
              and rest easy with our 100-day inspection guarantee.
            </p>
          </div>
        </div>
        {/* footer two */}
        <nav>
          <div>
            <h4 className="font-bold mt-10 my-6 text-xl">
              <div>Resources</div>
            </h4>
          </div>
          <ul>
            <li>
              <a>
                <p className="mb-4">
                  <span>
                    Home affordability <br /> calculator
                  </span>
                </p>
              </a>
            </li>
            <li>
              <a>
                <p className="mb-4">
                  <span>Mortgage calculator</span>
                </p>
              </a>
            </li>
            <li>
              <a>
                <p className="mb-4">
                  <span>Free mortgage calculator</span>
                </p>
              </a>
            </li>
            <li>
              <a>
                <p className="mb-4">
                  <span>
                    Mortgage calculator with <br /> taxes
                  </span>
                </p>
              </a>
            </li>
            <li>
              <a>
                <p className="mb-4">
                  <span>Mortgage calculator with PMI</span>
                </p>
              </a>
            </li>
            <li>
              <a>
                <p className="mb-4">
                  <span>Rent vs buy calculator</span>
                </p>
              </a>
            </li>
            <li>
              <a>
                <p className="mb-4">
                  <span>HELOC payment calculator</span>
                </p>
              </a>
            </li>
            <li>
              <a>
                <p className="mb-4">
                  <span>
                    HELOC vs cash-out refinance <br /> calculator
                  </span>
                </p>
              </a>
            </li>
            <li>
              <a>
                <p className="mb-4">
                  <span>Buy a home</span>
                </p>
              </a>
            </li>
            <li>
              <a>
                <p className="mb-4">
                  <span>Sell a home</span>
                </p>
              </a>
            </li>
            <li>
              <a>
                <p>
                  <span>Get home inspection</span>
                </p>
              </a>
            </li>
          </ul>
        </nav>
        {/* footer part three */}
        <div>
          <h4 className="font-bold mt-10 my-6 text-xl">Company</h4>
          <ul>
            <li>
              <a className="mb-4">About Us</a>
            </li>
            <li>
              <a className="mb-4">Careers</a>
            </li>
            <li>
              <a className="mb-4">Media</a>
            </li>
            <li>
              <a className="mb-4">Partner With Us</a>
            </li>
            <li>
              <a className="mb-4">Learning center</a>
            </li>
            <li>
              <a className="mb-4">FAQs</a>
            </li>
            <li>
              <a className="mb-4">Investor Relations</a>
            </li>
          </ul>
        </div>
        {/* footer part four */}
        <div>
          <h4 className="font-bold mt-10 my-6 text-xl">Contact Us</h4>
          <ul>
            <li className="mb-4">hello@better.com</li>
            <li className="mb-4">415-523-8837</li>
            <li>FAQ</li>
            <li className="mb-4">Glossary</li>
          </ul>
          <h4 className="font-bold mb-6 text-xl">Legal</h4>
          <ul>
            <li className="mb-4">NMLS Consumer Access</li>
            <li className="mb-4">Privacy Policy</li>
            <li className="mb-4">Terms of Use</li>
            <li className="mb-4">Disclosures & Licensing</li>
            <li className="mb-4">Affiliated Business</li>
            <li className="mb-4">Browser Disclaimer</li>
            <li className="mb-4 flex gap-6 text-5xl">
              <IoHomeOutline />
              <HiOutlineHomeModern />
            </li>
          </ul>
        </div>
        {/* footer part five */}
      </div>
      <div className="w-11/12 mx-auto mt-8">
        <div className="flex gap-3 text-2xl my-10">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
        <p className="text-xs mb-4">
          © 2025 Better Home & Finance Holding Company and/or its affiliates.
          Better is a family of companies. Better Mortgage Corporation provides
          home loans; Better Real Estate, LLC and Better Real Estate California
          Inc License # 02164055 provides real estate services; Better Cover,
          LLC sells insurance products; and Better Settlement Services provides
          title insurance services; and Better Inspect, LLC provides home
          inspection services. All rights reserved.
        </p>
        <p className="text-xs mb-4">
          Home lending products offered by Better Mortgage Corporation. Better
          Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade
          Center, 80th Floor, New York, NY 10007. Loans made or arranged
          pursuant to a California Finance Lenders Law License. Not available in
          all states. Equal Housing Lender.
          <span className="underline"> NMLS Consumer Access</span>
        </p>
        <p className="text-xs mb-4">
          Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
          LLC and Better Real Estate, and operating in the State of California
          through its wholly owned subsidiary Better Real Estate California
          Inc., is a licensed real estate brokerage and maintains its corporate
          headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA
          19106. Here is a full listing of Better Real Estate, LLC’s license
          numbers. Better Real Estate, LLC provides access to real estate
          brokerage services via its nationwide network of partner brokerages
          and real estate agents (“Better Real Estate Partner Agents”). Equal
          Housing Opportunity. All rights reserved.
        </p>
        <p className="text-xs mb-4 underline ">
          New York State Housing and Anti-Discrimination Notice
        </p>
        <p className="text-xs mb-4 underline ">
          New York Standard Operating Procedures
        </p>
        <p className="text-xs mb-4 ">
          Texas Real Estate Commission:
          <span className="underline ml-1">
            Information About Brokerage Services | Consumer Protection Notice
          </span>
        </p>
        <p className="text-xs mb-4">
          Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803,
          Philadelphia, PA 19106.
        </p>
        <p className="text-xs mb-4">
          Homeowners insurance policies are offered through Better Cover, LLC, a
          Pennsylvania Resident Producer Agency. License #881593. 325-41
          Chestnut Street, Suite 807, Philadelphia, PA 19106.
        </p>
        <p className="text-xs mb-4">
          Insurance quotes and policies are offered through Better Cover, LLC. A
          Pennsylvania Resident Producer Agency. License #881593. Here is a full
          listing of Better Cover, LLC’s license numbers.
        </p>
        <p className="text-xs mb-4">
          Better Inspect, LLC maintains its corporate headquarters at 325-41
          Chestnut Street, Suite 846, Philadelphia, PA 19106.
        </p>
        <p className="text-xs mb-4">
          Better Mortgage Corporation, Better Real Estate, LLC, Better
          Settlement Services, LLC, Better Cover, LLC, Better Connect, and
          Better Inspect, LLC are separate operating subsidiaries of Better Home
          & Finance Holding Company. Each company is a separate legal entity
          operated and managed through its own management and governance
          structure as required by its state of incorporation, and applicable
          and legal and regulatory requirements. Products not available in all
          states.
        </p>
        <p className="text-xs ">
          Any unauthorized use of any proprietary or intellectual property is
          strictly prohibited. All trademarks, service marks, trade names,
          logos, icons, and domain names are proprietary to Better Home &
          Finance Holding Company. Better Home & Finance Holding Company
          trademarks are federally registered with the U. S. Patent and
          Trademark Office. Better Cover is a registered trademark with the U.S.
          Patent and Trademark Office and is owned by Better Cover, LLC.
        </p>
      </div>
    </div>
  );
};

export default Footer;
