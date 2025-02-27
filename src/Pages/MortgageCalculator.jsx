import React from "react";
import monthlyDebt from "../../public/1.jpg";
import formula from "../../public/formula.jpg";
import debpsIncome from "../../public/2.jpg";
import simpleImage from "../../public/simple-image.jpg";

const MortgageCalculator = () => {
  return (
    <div className="pt-32">
      <section className="bg-[#F0F7F1] py-8 sm:pl-8 pl-6 md:pl-12">
        <div className=" w-[90%] mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            Mortgage calculator
          </h1>
          <p>
            Our mortgage calculator includes key factors like homeowners
            association fees, property taxes, and <br /> private mortgage
            insurance (PMI). Get the whole picture and calculate your total
            monthly payment.
          </p>
          <div className="flex lg:flex-row flex-col justify-between items-center mt-8">
            <div className="flex justify-between items-center w-full lg:w-[60%]">
              <div className="flex flex-col gap-4">
                <h1 className="font-semibold">Home Price</h1>
                <div>
                  <input
                    className="py-5 font-bold text-3xl px-3 w-[80%] lg:w-[60%] rounded-xl border border-gray-400 hover:ring-4 ring-[#017848]  bg-white"
                    type="text"
                    defaultValue={"$270,300"}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="font-semibold">Monthly payment</h1>
                <h1 className="font-bold text-2xl sm:text-4xl md:text-6xl">
                  $566/mo
                </h1>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-auto gap-4">
              <div className="relative mt-10  w-[96%] mx-auto  block lg:hidden h-1 bg-gray-400">
                <div className="w-4 h-4 absolute left-1/2 -translate-x-1/2 -top-[6px] rounded-full bg-black"></div>
              </div>
              <div className="mt-8 flex-1 ">
                <button className="bg-[#017848] w-full rounded-xl hover:bg-[#004733] text-xl font-semibold text-white py-4 px-6">
                  Get-pre-approved
                </button>
              </div>
            </div>
          </div>
          <div className="relative mt-10 w-[96%] mx-auto hidden lg:block h-1 bg-gray-400">
            <div className="w-4 h-4 absolute left-1/2 -translate-x-1/2 -top-[6px] rounded-full bg-black"></div>
          </div>
          {/* asjdsadpasd */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex lg:flex-row flex-col gap-4 items-center">
              <div className="relative w-full">
                <input
                  className="pt-6 w-full pb-4 font-bold text-2xl pr-3 pl-5 rounded-xl border border-gray-400 hover:ring-4 ring-[#017848] bg-white"
                  type="text"
                  defaultValue={"1206"}
                />
                <label
                  className="absolute text-xs font-semibold top-[6px] left-5 text-gray-600"
                  htmlFor="4"
                >
                  Zip code
                </label>
              </div>
              <div className="relative w-full">
                <input
                  className="pt-6 w-[70%] pb-4 font-bold text-2xl pr-3 pl-5 rounded-l-xl border border-gray-400 hover:ring-4 ring-[#017848]  bg-white"
                  type="text"
                  defaultValue={"$270,300"}
                />
                <input
                  className="pt-6 w-[30%] pb-4 font-bold text-2xl pr-3 pl-5 rounded-r-xl border border-gray-400 text-center hover:ring-4 ring-[#017848]  bg-white"
                  type="text"
                  defaultValue={"20%"}
                />
                <label
                  className="absolute text-xs font-semibold top-[6px] left-5 text-gray-600"
                  htmlFor="4"
                >
                  Down payment
                </label>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="relative w-full">
                <input
                  className="pt-6 pb-4 font-bold text-2xl pr-3 pl-5 rounded-xl border border-gray-400 w-full hover:ring-4 ring-[#017848]  bg-white"
                  type="text"
                  defaultValue={"6.500"}
                />
                <label
                  className="absolute text-xs font-semibold top-[6px] left-5 text-gray-600"
                  htmlFor="4"
                >
                  Interest rate
                </label>
              </div>
              <div className="relative w-full">
                <label
                  className="absolute text-xs font-semibold top-[6px] left-5 text-gray-600"
                  htmlFor="4"
                >
                  Length of loan
                </label>
                <select className="pt-6 pb-4 font-bold text-2xl pr-3 pl-5 rounded-xl border border-gray-400 w-full hover:ring-4 ring-[#017848]  bg-white">
                  <option value="30">30 years</option>
                  <option value="20">20 years</option>
                  <option value="15">15 years</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* secrion two */}
      <section className="bg-[#FFFDFA]">
        <div className="m-auto w-[90%] pt-8 justify-between px-6 md:px-14">
          <div className="grid md:grid-cols-2">
            <div>
              <h4 className="font-bold text-textPrimary leading-heading tracking-normal text-base md:text-lg">
                Monthly payment breakdown
              </h4>
              <p className="leading-body mt-lg text-3xl font-bold text-textPrimary">
                $1,996/mo
              </p>
              <div className="mt-8">
                <svg
                  height="100"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    height="80"
                    rx="40"
                    ry="40"
                    fill="green"
                    width="361.61"
                    x="0"
                    y="0"
                  />
                  <rect
                    height="80"
                    rx="35"
                    ry="35"
                    fill="purple"
                    width="70.1"
                    x="361.61"
                    y="0"
                  />
                  <rect
                    height="80"
                    rx="17.5"
                    ry="17.5"
                    fill="yellow"
                    width="34.92"
                    x="431.71"
                    y="0"
                  />
                  <rect
                    height="80"
                    rx="17.5"
                    ry="17.5"
                    fill="orange"
                    width="34.92"
                    x="466.63"
                    y="0"
                  />
                  <rect
                    height="80"
                    rx="13.2"
                    ry="13.2"
                    fill="red"
                    width="26.45"
                    x="501.55"
                    y="0"
                  />
                </svg>
              </div>
            </div>

            <div>
              {/* Principal & Interest */}
              <div className="flex justify-between h-12 mb-4">
                <div className="flex items-center w-1/2 text-textPrimary">
                  <div className="rounded-sm h-4 w-1 bg-backgroundInverseSecondary mr-2"></div>
                  <p className="text-base font-normal border-l-4 border-gray-500 pl-2">
                    Principal & interest
                  </p>
                </div>

                <div className="relative w-full md:w-[30%]">
                  <label className="absolute text-xl font-bold left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                    $
                  </label>
                  <input
                    className="w-full h-12 text-2xl font-bold pl-8 pr-3 rounded-xl border border-gray-400 hover:ring-4 ring-[#017848] bg-white"
                    type="number"
                    defaultValue="1367"
                  />
                </div>
              </div>

              {/* Property Taxes */}
              <div className="flex justify-between h-12 mb-4">
                <div className="flex items-center w-1/2 text-textPrimary">
                  <div className="rounded-sm h-4 w-1 bg-infoSecondary mr-2"></div>
                  <p className="text-base font-normal border-l-4 border-purple-500 pl-2">
                    Property taxes
                  </p>
                </div>
                <div className="relative w-full md:w-[30%]">
                  <label className="absolute text-xl font-bold left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                    $
                  </label>
                  <input
                    className="w-full h-12 text-2xl font-bold pl-8 pr-3 rounded-xl border border-gray-400 hover:ring-4 ring-[#017848] bg-white"
                    type="number"
                    defaultValue="265"
                  />
                </div>
              </div>

              {/* Homeowners Insurance */}
              <div className="flex justify-between h-12 mb-4">
                <div className="flex items-center w-1/2 text-textPrimary">
                  <div className="rounded-sm h-4 w-1 bg-graph2Tertiary mr-2"></div>
                  <p className="text-base font-normal border-l-4 border-purple-300 pl-2">
                    Homeowners insurance
                  </p>
                </div>
                <div className="relative w-full md:w-[30%]">
                  <label className="absolute text-xl font-bold left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                    $
                  </label>
                  <input
                    className="w-full h-12 text-2xl font-bold pl-8 pr-3 rounded-xl border border-gray-400 hover:ring-4 ring-[#017848] bg-white"
                    type="number"
                    defaultValue="132"
                  />
                </div>
              </div>

              {/* HOA Fees */}
              <div className="flex justify-between h-12 mb-4">
                <div className="flex items-center w-1/2 text-textPrimary">
                  <div className="rounded-sm h-4 w-1 bg-graph4Tertiary mr-2"></div>
                  <p className="text-base font-normal border-l-4 border-yellow-400 pl-2">
                    HOA fees
                  </p>
                </div>
                <div className="relative w-full md:w-[30%]">
                  <label className="absolute text-xl font-bold left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                    $
                  </label>
                  <input
                    className="w-full h-12 text-2xl font-bold pl-8 pr-3 rounded-xl border border-gray-400 hover:ring-4 ring-[#017848] bg-white"
                    type="number"
                    defaultValue="132"
                  />
                </div>
              </div>

              {/* Utilities */}
              <div className="flex justify-between h-12 mb-4">
                <div className="flex items-center w-1/2 text-textPrimary">
                  <div className="rounded-sm h-4 w-1 bg-graph3Tertiary mr-2"></div>
                  <p className="text-base font-normal border-l-4 border-orange-500 pl-2">
                    Utilities
                  </p>
                </div>
                <div className="relative w-full md:w-[30%]">
                  <label className="absolute text-xl font-bold left-4 top-1/2 transform -translate-y-1/2 text-gray-600">
                    $
                  </label>
                  <input
                    className="w-full h-12 text-2xl font-bold pl-8 pr-3 rounded-xl border border-gray-400 hover:ring-4 ring-[#017848] bg-white"
                    type="number"
                    defaultValue="100"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="mt-4 px-6 py-3 text-base font-bold text-white bg-interactiveSecondary rounded transition hover:bg-accentSecondary">
            Copy estimate link
          </button>
        </div>
      </section>

      {/* section three */}
      <div className="py-8 w-[90%] mx-auto">
        <h1 className=" sm:text-3xl text-xl border-y border-gray-300 py-8 font-bold mb-6">
          How does a mortgage calculator help me?
          <p className="text-gray-500 text-xl font-normal mt-6">
            When deciding how much house you can afford, one of the most
            important pieces to determine is whether a home will fit into your
            monthly budget. A mortgage calculator helps you understand the
            monthly cost of a home. And ours will allow you to enter different
            down payments and interest rates to help determine what is
            affordable for you.
          </p>
        </h1>
      </div>
      <div className="pt-8 w-[90%] mx-auto">
        <h1 className=" sm:text-3xl text-xl  font-bold mb-6">
          How much monthly mortgage payment can I afford?
          <p className="text-gray-500 text-xl font-normal mt-6">
            Lenders determine how much you can afford on a monthly housing
            payment by calculating your debt-to-income ratio (DTI). The maximum
            DTI you can have in order to qualify for most mortgage loans is
            often between 45-50%, with your anticipated housing costs included.
          </p>
          <p className="text-gray-500 text-xl font-normal mt-4">
            Your DTI is the balance between your income and your debt. It helps
            lenders understand how safe or risky it is for them to approve your
            loan. A DTI ratio represents how much of your gross monthly income
            is spoken for by creditors, and how much of it is left over to you
            as disposable income. It’s most commonly written as a percentage.
            For example, if you pay half your monthly income in debt payments,
            you would have a DTI of 50%.
          </p>
        </h1>
      </div>
      <div className="w-[90%] md:w-[60%] mx-auto ">
        <p className="text-gray-500 mb-4">
          Formula for calculating your debt-to-income (DTI) ratio:
        </p>
        <img src={formula} alt="" />
      </div>
      <div className="w-[90%] md:w-[60%] mx-auto  pb-6">
        <p className="text-gray-500 my-4">
          Here’s an example of what calculating your DTI might look like:
        </p>
        <img src={debpsIncome} alt="" />
      </div>
      <div className="w-[90%]  mx-auto border-b border-gray-300 pb-6"></div>
      <div className="pt-8 w-[90%] mx-auto">
        <h1 className=" sm:text-3xl text-xl font-bold mb-6">
          How to calculate monthly mortgage payments?
          <p className="text-gray-500 text-xl font-normal mt-6">
            Your monthly mortgage payment includes loan principal and interest,
            property taxes, homeowners insurance, and mortgage insurance (PMI),
            if applicable. While not typically included in your mortgage
            payment, homeowners also pay monthly utilities and sometimes pay
            homeowners association (HOA) fees, so it’s a good idea to factor
            these into your monthly budget. This mortgage calculator factors in
            all these typical monthly costs so you can really crunch the
            numbers.
          </p>
        </h1>
      </div>
      <div className="pt-4 w-[90%] mx-auto">
        <h1 className=" sm:text-2xl text-xl   font-bold mb-6">
          Formula for calculating monthly mortgage payments
        </h1>
        <p className="text-gray-500 text-xl font-normal mt-6">
          The easiest way to calculate your mortgage payment is to use a
          calculator, but for the curious or mathematically inclined, here’s the
          formula for calculating principal and interest yourself:
        </p>
      </div>
      <div
        className="w-[90%] md:w-[60%] mx-auto mt-4
   "
      >
        <p className="text-gray-500 mb-4">
          The easiest way to calculate your mortgage payment is to use a
          calculator, but for the curious or mathematically inclined, here’s the
          formula for calculating principal and interest yourself:
        </p>
        <img src={monthlyDebt} alt="" />
        <div>
          <p>Where:</p>
          <ul style={{ listStyleType: "disc" }}>
            <li>
              <p>
                <b>M</b> is monthly mortgage payments
              </p>
            </li>
            <li>
              <p>
                <b>P</b> is the principal loan amount (the amount you borrow)
              </p>
            </li>
            <li>
              <p>
                <b>r</b> is the monthly interest rate
                <br />
                (annual interest rate divided by 12 and expressed as a decimal)
                <br />
                <small>
                  For example:
                  <br />
                  if the annual interest rate is <b>5%</b>,<br /> the monthly
                  rate would be <b>0.05/12</b> = .00417, or <b>.417%</b>
                </small>
              </p>
            </li>
            <li>
              <p>
                <b>n</b> is the total number of payments in months
                <br />
                <small>
                  For example:
                  <br />
                  for a 30-year loan, n = 30×12 = <b>360</b> months
                </small>
              </p>
            </li>
          </ul>
          <p className="mt-3">Here’s a simple example:</p>
          <img
            alt="Mortgage calculator | Monthly mortgage payment formula example"
            loading="lazy"
            width="780"
            height="221"
            decoding="async"
            className="mt-3"
            src={simpleImage}
          />
        </div>
      </div>
      <div className="pt-4 w-[90%] mx-auto border-b pb-6 border-gray-300">
        <p className="text-gray-500 text-xl font-normal mt-6">
          This formula assumes a fixed-rate mortgage, where the interest rate
          remains constant throughout the loan term. And remember, you’ll still
          need to add on taxes, insurance, utilities, and HOA fees if
          applicable.
        </p>
      </div>
      <div className="pt-4 w-[90%] mx-auto">
        <h1 className=" sm:text-2xl text-xl text-gray-700   font-bold mb-6">
          How to use this mortgage calculator?
        </h1>
        <p className="text-gray-500 text-xl font-normal mt-6">
          Play around with different home prices, locations, down payments,
          interest rates, and mortgage lengths to see how they impact your
          monthly mortgage payments.
        </p>
        <p className="text-gray-500 text-xl font-normal mt-6">
          Increasing your down payment and decreasing your interest rate and
          mortgage term length will make your monthly payment go down. Taxes,
          insurance, and HOA fees will vary by location. If you enter a down
          payment amount that’s less than 20% of the home price, private
          mortgage insurance (PMI) costs will be added to your monthly mortgage
          payment. As the costs of utilities can vary from county to county,
          we’ve included a utilities estimate that you can break down by
          service. If you’re thinking about buying a condo or into a community
          with a Homeowners Association (HOA), you can add HOA fees.
        </p>
        <p className="text-gray-500 text-xl font-normal mt-6">
          The only amounts we haven’t included are the money you’ll need to save
          for annual home maintenance/repairs or the costs of home improvements.
          To see how much home you can afford including these costs, take a look
          at the Better home affordability calculator.
        </p>
        <p className="text-gray-500 text-xl font-normal mt-6">
          Fun fact: Property tax rates are extremely localized, so two homes of
          roughly the same size and quality on either side of a municipal border
          could have very different tax rates. Buying in an area with a lower
          property tax rate may make it easier for you to afford a higher-priced
          home.
        </p>
      </div>
      <div className="pt-4 w-[90%] mx-auto">
        <h1 className=" sm:text-2xl text-xl text-gray-700   font-bold mb-6">
          Formula for calculating monthly mortgage payments
        </h1>
        <p className="text-gray-500 text-xl font-normal mt-6">
          The easiest way to calculate your mortgage payment is to use a
          calculator, but for the curious or mathematically inclined, here’s the
          formula for calculating principal and interest yourself:
        </p>
      </div>
      {/* table */}
      <div className="overflow-x-auto w-[90%] mx-auto mt-8">
        <table className="min-w-full border border-successAccent table-auto rounded-lg shadow-md ">
          <thead className="bg-[#004733] text-white">
            <tr>
              <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                  State
                </p>
              </th>
              <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                  Median Effective Property Tax Rate
                </p>
              </th>
              <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                  Mean Effective Property Tax Rate
                </p>
              </th>
              <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                  Median Home Value
                </p>
              </th>
              <th className="border border-strokeInverseBorder text-center bg-accentPrimary px-2 py-3 md:px-4">
                <p className="leading-body m-0 p-0 text-sm text-center text-textInversePrimary font-bold">
                  Median Property Taxes Paid
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-successBackground">
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  AL
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  0.41%
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  0.40%
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  $157,100
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  $646
                </p>
              </td>
            </tr>
            <tr className="even:bg-successBackground">
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  AK
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  1.23%
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  1.04%
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  $282,800
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  $3,464
                </p>
              </td>
            </tr>
            <tr className="even:bg-successBackground">
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  AZ
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  0.62%
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  0.63%
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  $265,600
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  $1,648
                </p>
              </td>
            </tr>
            <tr className="even:bg-successBackground">
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  AR
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  0.62%
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  0.64%
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  $142,100
                </p>
              </td>
              <td className="border border-successAccent text-center px-2 py-3 md:px-4">
                <p className="font-normal leading-body m-0 p-0 text-sm text-center text-textSecondary">
                  $878
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* table end */}
      <div className="py-8  border-y border-gray-300 mt-8 w-[90%] mx-auto">
        <h1 className=" text-gray-700 sm:text-3xl text-xl font-bold mb-6">
          How does a mortgage calculator help me?
        </h1>
        <h1 className=" sm:text-3xl text-gray-700 text-xl font-bold mb-6">
          This mortgage calculator shows your payments with taxes and insurance
        </h1>
        <p className="text-gray-500 text-xl font-normal mt-6">
          The property taxes you contribute are used to finance the services
          provided by your local government to the community. These services
          encompass schools, libraries, roads, parks, water treatment, police,
          and fire departments. Even after your mortgage has been fully paid,
          you will still need to pay property taxes. If you neglect your
          property taxes, you run the risk of losing your home to your local tax
          authority.
        </p>

        <p className="text-gray-500 text-xl font-normal mt-6">
          Your lender will usually require you to have homeowners insurance
          while you're settling your mortgage. This is a common practice among
          lenders because they understand that nobody wants to continue paying a
          mortgage on a home that's been damaged or destroyed.
        </p>
        <p className="text-gray-500 text-xl font-normal mt-6">
          Here's an interesting fact: Once you fully own your home, the choice
          to maintain homeowners insurance is entirely up to you. However, to
          ensure your home is protected against damages caused by fires,
          lightning strikes, and natural disasters that are common in your area,
          it is highly recommended to keep it. Therefore, always factor in these
          costs when using a Mortgage Calculator.
        </p>
        <h1 className=" text-gray-700 sm:text-3xl text-xl font-bold my-6">
          This mortgage calculator shows your mortgage costs with PMI
        </h1>
        <p className="text-gray-500 text-xl font-normal mt-6">
          PMI, an abbreviation for private mortgage insurance, aids potential
          homeowners in qualifying for a mortgage without the necessity of a 20%
          down payment. By opting for a lower down payment and choosing a
          mortgage with PMI, you can purchase a home sooner, begin accruing
          equity, and keep cash available for future needs. This can all be
          calculated using this Mortgage Calculator.
        </p>
        <p className="text-gray-500 text-xl font-normal mt-4">
          Choosing a mortgage with PMI is a popular option: 71% of first-time
          homebuyers had a down payment of less than 20% in July 2021. In 2020,
          the median down payment for first-time homebuyers was just 7%, and it
          hasn’t risen above 10% since 1989.
        </p>
        <p className="text-gray-500 text-xl font-normal mt-4">
          PMI is automatically removed from conventional mortgages once your
          home equity reaches 22%. Alternatively, you can request the removal of
          PMI once you've accumulated at least 20% home equity.
        </p>
        <h1 className=" text-gray-700 sm:text-3xl text-xl font-bold my-6">
          This mortgage calculator includes HOA fees
        </h1>
        <p className="text-gray-500 text-xl font-normal mt-6">
          Homeowners association (“HOA”) fees are typically charged directly by
          a homeowners association, but as HOA fees come part and parcel with
          condos, townhomes, and planned housing developments, they’re an
          essential factor to consider when calculating your mortgage costs.
        </p>
        <p className="text-gray-500 text-xl font-normal mt-4">
          Homes that share structural elements, such as roofs and walls, or
          community amenities like landscaping, pools, or BBQ areas, often
          require homeowners to pay HOA fees for the maintenance of these shared
          features. It's important to factor in these costs during your budget
          planning stage, especially considering that HOA fees typically
          increase annually. HOAs may also charge additional fees known as
          ‘special assessments’ to cover unexpected expenses from time to time.
        </p>
      </div>
      {/* -------------- */}
      <div className="py-8  border-b border-gray-300 mt-8 w-[90%] mx-auto">
        <h1 className=" text-gray-700 sm:text-3xl text-xl font-bold mb-6">
          How to reduce your monthly mortgage payments?
        </h1>
        <p className="text-gray-500 text-xl font-normal mt-6">
          The lower the purchase price of the home, the lower your loan amount
          will be. But if the seller is less than willing to cut you a deal, you
          have other options.
        </p>
        <h1 className=" sm:text-3xl text-gray-700 text-xl font-bold mb-6">
          Extend the length of your mortgage
        </h1>
        <p className="text-gray-500 text-xl font-normal mt-6">
          The more time you have to pay off the mortgage, the less each monthly
          mortgage payment will be. (In lender-speak, ‘extending the length of
          your mortgage’ is known as ‘increasing your loan term’.) This is why
          people often choose a 30-year fixed rate mortgage over one with a 15-
          or 20-year term.
        </p>
        <h1 className=" sm:text-3xl text-gray-700 text-xl font-bold mb-6">
          Increase your down payment
        </h1>
        <p className="text-gray-500 text-xl font-normal mt-6">
          The smaller the amount of your mortgage, the smaller your monthly
          mortgage payments will be. If you’re able to put at least 20% of the
          home price towards your down payment, you’ll be able to avoid PMI
          (private mortgage insurance). Even if you can’t afford a complete 20%
          down payment, boosting your down payment will help you get PMI removed
          sooner. In fact, boosting your down payment by 5% can lower your
          monthly PMI fees.
        </p>
        <h1 className=" text-gray-700 sm:text-3xl text-xl font-bold my-6">
          Get a lower interest rate
        </h1>
        <p className="text-gray-500 text-xl font-normal mt-6">
          Increasing your down payment can be one way to help you qualify for a
          lower interest rate. The amount of your down payment compared to the
          total amount of the loan is called your loan-to-value ratio (LTV).
        </p>
        <p className="text-gray-500 text-xl font-normal mt-4">
          Depending on your loan amount, a lower LTV may increase the likelihood
          of you being offered a low interest rate. If you intend on keeping
          your home for a while, you could consider buying points to reduce your
          interest rate. Buying points essentially means you agree to pay more
          upfront costs in exchange for a lower monthly payment.
        </p>
        <p className="text-gray-500 text-xl font-normal mt-4">
          If you think you may sell or refinance the home in the first 5-10
          years of the mortgage, you could consider an adjustable-rate mortgage
          (ARM). An ARM offers a lower fixed interest rate for a set
          introductory period—typically 5, 7, or 10 years. Once the set
          introductory period ends, the interest rate adjusts (interest rate may
          increase after consummation). The introductory interest rate for ARMs
          is typically lower than the interest rate for a conventional
          fixed-rate mortgage which could make it a great way to save on
          interest if you know you won’t keep the mortgage for long.
        </p>
        <p className="text-gray-500 text-xl font-normal mt-6">
          If you’re not planning on buying a home for a while, improving your
          credit score is a tried and true way of increasing your chances of
          qualifying for a lower interest rate. By reducing your debt-to-income
          ratio (DTI), lenders will see that you comfortably afford your
          mortgage and may be more willing to offer a lower interest rate.
        </p>
      </div>
      <div className="py-8  border-b border-gray-300 mt-8 w-[90%] mx-auto">
        <h1 className=" text-gray-700 sm:text-3xl text-xl font-bold mb-6">
          How much home can I afford?
        </h1>
        <p className="text-gray-500 text-xl font-normal mt-6">
          Once again, the easiest way to do this is with a calculator! To know
          if a home is in your budget, try out our home affordability
          calculator. This calculator will take a few inputs from you, like
          income and savings, and let you know the maximum amount of home you
          can afford.
        </p>
      </div>
      <div className="py-8  border-b border-gray-300 mt-8 w-[90%] mx-auto">
        <h1 className=" text-gray-700 sm:text-3xl text-xl font-bold mb-6">
          Next steps to buying a house
        </h1>
        <p className="text-gray-500 text-xl font-normal mt-6">
          There are 8 steps to buying a house and by using this calculator
          you’ve completed step 2 (calculating your home affordability) and
          maybe even step 1 (getting your finances in order).
        </p>
        <p className="text-gray-500 text-xl font-normal mt-6">
          The next step is getting pre-approved. A mortgage pre-approval with
          Better Mortgage takes as little as 3-minutes and doesn’t impact your
          credit score. It’s a free, no-commitment way to see how much home you
          can buy, the mortgages you qualify for, and the range of interest
          rates you’ll be offered.
        </p>
        <p className="text-gray-500 text-xl font-normal mt-6">
          If you’re ready to buy a home now, our definitive home buying
          checklist can walk you through everything you need to know to get the
          home you want. With your Better Mortgage pre-approval letter in hand,
          you’ll be able to show sellers and real estate agents that you mean
          business—giving you an edge over homebuyers that don’t have this kind
          of proof that they’re financially ready to purchase. And by working
          with an agent from Better Real Estate and funding with Better
          Mortgage, you’ll save $2,000 on closing costs, and save up to $8,200
          on average over the life of your loan.**
        </p>
      </div>
      <div className="py-8 mt-8 w-[90%] mx-auto">
        <h1 className=" text-gray-700 sm:text-3xl text-xl font-bold mb-6">
          More resources
        </h1>
        {/* cart */}
        <div className="flex flex-col md:flex-row justify-between gap-8 pt-9 md:gap-12">
          <div className="rounded-lg px-6 py-8 border border-strokeDivider flex-1">
            <img
              alt="Get pre-approved to see how much you can borrow"
              loading="lazy"
              width="32"
              height="32"
              decoding="async"
              src="https://media.better.com/better-com/mortgage-calculator/doc-correct.svg"
              style={{ color: "transparent" }}
            />
            <p className="font-normal leading-body m-0 p-0 text-left mt-6 text-xl text-interactiveForegroundSecondary">
              Get pre-approved to see how much you can borrow
            </p>
            <a
              className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-2 mt-4 font-bold no-underline hover:underline text-[#017848]"
              href="/preapproval/nxt-purchase?utm_source=website&utm_medium=webpage&utm_campaign=calculator&utm_content=mortgage-calculator"
            >
              Get started →
            </a>
            <p className="font-normal leading-body m-0 p-0 text-left text-xs text-textSecondary">
              Won’t impact your credit
            </p>
          </div>

          <div className="rounded-lg px-6 py-8 border border-strokeDivider flex-1">
            <img
              alt="See today’s rates in your area"
              loading="lazy"
              width="32"
              height="32"
              decoding="async"
              src="https://media.better.com/better-com/mortgage-calculator/downtrend.svg"
              style={{ color: "transparent" }}
            />
            <p className="font-normal leading-body m-0 p-0 text-left mt-6 text-xl text-interactiveForegroundSecondary ">
              See today’s rates in your area
            </p>
            <p
              className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-2 mt-4 font-bold no-underline hover:underline text-[#017848]"
              href="/mortgage-rates "
            >
              See rates →
            </p>
          </div>

          <div className="rounded-lg px-6 py-8 border border-strokeDivider flex-1">
            <img
              alt="Find out your max homebuying budget"
              loading="lazy"
              width="32"
              height="32"
              decoding="async"
              src="https://media.better.com/better-com/mortgage-calculator/calculator.svg"
              style={{ color: "transparent" }}
            />
            <p className="font-normal leading-body m-0 p-0 text-left mt-6 text-xl text-interactiveForegroundSecondary">
              Find out your max homebuying budget
            </p>
            <a
              className="focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] text-interactivePrimary block mb-2 mt-4 font-bold no-underline hover:underline text-[#017848]"
              href="/how-much-house-can-i-afford"
            >
              Try our mortgage calculator →
            </a>
          </div>
        </div>
      </div>
      <section className="pb-8 m-auto max-w-screen-2xl justify-between px-6 md:px-14">
        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs">
          *See{" "}
          <a
            className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-2 text-interactivePrimary"
            href="/faq/rates/whats-the-fine-print-better-real-estate/"
          >
            Better Real Estate discount terms and conditions
          </a>
          .
        </p>
        <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-xs mt-4">
          **The average lifetime savings estimate is based on a comparison of
          the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30-year
          fixed-rate mortgage product with Better Mortgage’s own offered rate
          for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is
          based on conventional, conforming fully-amortizing home purchase loans
          for borrowers with a loan-to-value of 80 percent and with excellent
          credit. Better Mortgage’s offered rate is based on pricing output for
          a 30-year fixed-rate mortgage product with a 30-day lock period for a
          single-family, owner-occupied residential property and a borrower with
          excellent (760 FICO) credit and a loan-to-value ratio of 80 percent.
          Individual savings could vary based on current market rates, property
          type, loan amount, loan-to-value, credit score, debt-to-income ratio
          and other variables.
        </p>
      </section>
    </div>
  );
};

export default MortgageCalculator;
