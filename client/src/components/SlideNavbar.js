import React from "react";

import { NavLink } from "react-router-dom";
export default function SlideNavbar() {
  return (
    <>
      <div className="flex min-h-screen w-full">
        <aside className="fixed inset-y-0 left-0 z-10 flex h-full w-14 flex-col border-r bg-background sm:w-64 sm:flex-row sm:items-start sm:justify-between">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <NavLink
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4 transition-all group-hover:scale-110"
              >
                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              </svg>
              <span className="sr-only">Acme Inc</span>
            </NavLink>
            <NavLink
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              data-state="closed"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span className="sr-only">Overview</span>
            </NavLink>
            <NavLink
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              data-state="closed"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
              </svg>
              <span className="sr-only">Analytics</span>
            </NavLink>
            <NavLink
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              data-state="closed"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span className="sr-only">Settings</span>
            </NavLink>
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <NavLink
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              data-state="closed"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
              <span className="sr-only">Help</span>
            </NavLink>
          </nav>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <nav aria-label="breadcrumb" className="hidden md:flex">
              <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
                <li className="inline-flex items-center gap-1.5">
                  <a className="transition-colors hover:text-foreground" to="/">
                    Dashboard
                  </a>
                </li>
                <li
                  aria-hidden="true"
                  className="[&amp;>svg]:size-3.5"
                  role="presentation"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <span
                    aria-current="page"
                    aria-disabled="true"
                    className="font-normal text-foreground"
                    role="link"
                  >
                    Overview
                  </span>
                </li>
              </ol>
            </nav>
            <div className="ml-auto flex items-center gap-2">
              <input
                className="flex h-10 border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                placeholder="Search..."
                type="search"
              />
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 overflow-hidden rounded-full"
                type="button"
                id="radix-:ru:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
              >
                <img
                  src="/placeholder.svg"
                  width="36"
                  height="36"
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                  style={{aspectRatio: 36 / 36, objectFit: 'cover'}}
                />
              </button>
            </div>
          </header>
          <main className="flex-1 p-4 sm:px-6 sm:py-0 md:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Total Revenue
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-5 w-5 text-muted-foreground"
                  >
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Subscriptions
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-5 w-5 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Sales
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-5 w-5 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Active Now
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="h-5 w-5 text-muted-foreground"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 mt-4">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Top Products
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Best selling products this month
                  </p>
                </div>
                <div className="p-6">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&amp;_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            Product
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            Sales
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            Revenue
                          </th>
                        </tr>
                      </thead>
                      <tbody className="[&amp;_tr:last-child]:border-0">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            <div className="font-medium">Acme Headphones</div>
                            <div className="text-sm text-muted-foreground">
                              Wireless Headphones
                            </div>
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            1,234
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            $12,340.00
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            <div className="font-medium">Acme Smartwatch</div>
                            <div className="text-sm text-muted-foreground">
                              Fitness Tracker
                            </div>
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            987
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            $9,870.00
                          </td>
                        </tr>
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            <div className="font-medium">Acme Laptop</div>
                            <div className="text-sm text-muted-foreground">
                              High-Performance Laptop
                            </div>
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            654
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            $32,700.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Sales by Region
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sales breakdown by geographical region
                  </p>
                </div>
                <div className="p-6">
                  <div className="aspect-square">
                    <div style={{width:' 100%', height: '100%'}}>
                      <div style={{position: 'relative'}}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="354.65625"
                          height="354.65625"
                          role="application"
                        >
                          <rect
                            width="354.65625"
                            height="354.65625"
                            fill="transparent"
                          ></rect>
                          <g transform="translate(10,10)">
                            <g transform="translate(167.328125,167.328125)">
                              <path
                                d="M-167.314,-2.137A167.328,167.328,0,0,1,-96.267,-136.863L0,0Z"
                                opacity="1"
                                fill="#2563eb"
                                stroke="#ffffff"
                                stroke-width="1"
                              ></path>
                              <path
                                d="M0,-167.328A167.328,167.328,0,0,1,162.763,-38.82L0,0Z"
                                opacity="1"
                                fill="#2563eb"
                                stroke="#ffffff"
                                stroke-width="1"
                              ></path>
                              <path
                                d="M84.28,144.553A167.328,167.328,0,0,1,-90.355,140.835L0,0Z"
                                opacity="1"
                                fill="#2563eb"
                                stroke="#ffffff"
                                stroke-width="1"
                              ></path>
                              <path
                                d="M162.763,-38.82A167.328,167.328,0,0,1,84.28,144.553L0,0Z"
                                opacity="1"
                                fill="#2563eb"
                                stroke="#ffffff"
                                stroke-width="1"
                              ></path>
                              <path
                                d="M-90.355,140.835A167.328,167.328,0,0,1,-167.314,-2.137L0,0Z"
                                opacity="1"
                                fill="#2563eb"
                                stroke="#ffffff"
                                stroke-width="1"
                              ></path>
                              <path
                                d="M-96.267,-136.863A167.328,167.328,0,0,1,0,-167.328L0,0Z"
                                opacity="1"
                                fill="#2563eb"
                                stroke="#ffffff"
                                stroke-width="1"
                              ></path>
                            </g>
                            <g transform="translate(167.328125,167.328125)">
                              <g
                                transform="translate(-96.20561035824547,-50.73393227282955)"
                                opacity="1"
                                style={{ pointerEvents: 'none' }}
                              >
                                <text
                                  text-anchor="middle"
                                  dominant-baseline="central"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '18px', 
  fill: 'rgb(255, 255, 255)', 
  outlineWidth: '0px', 
  outlineColor: 'transparent' 
}}
                                >
                                  Jan
                                </text>
                              </g>
                              <g
                                transform="translate(67.39830018452653,-85.36346103868479)"
                                opacity="1"
                                style={{ pointerEvents: 'none' }}
                              >
                                <text
                                  text-anchor="middle"
                                  dominant-baseline="central"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '18px', 
  fill: 'rgb(255, 255, 255)', 
  outlineWidth: '0px', 
  outlineColor: 'transparent' 
}}
                                >
                                  Feb
                                </text>
                              </g>
                              <g
                                transform="translate(-2.3147976059474487,108.73864566155909)"
                                opacity="1"
                                style={{ pointerEvents: 'none' }}
                              >
                                <text
                                  text-anchor="middle"
                                  dominant-baseline="central"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '18px', 
  fill: 'rgb(255, 255, 255)', 
  outlineWidth: '0px', 
  outlineColor: 'transparent' 
}}
                                >
                                  Mar
                                </text>
                              </g>
                              <g
                                transform="translate(99.9900495176589,42.79534257045646)"
                                opacity="1"
                                style={{ pointerEvents: 'none' }}
                              >
                                <text
                                  text-anchor="middle"
                                  dominant-baseline="central"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '18px', 
  fill: 'rgb(255, 255, 255)', 
  outlineWidth: '0px', 
  outlineColor: 'transparent' 
}}
                                >
                                  Apr
                                </text>
                              </g>
                              <g
                                transform="translate(-95.77019025974406,51.5511591128563)"
                                opacity="1"
                                style={{ pointerEvents: 'none' }}
                              >
                                <text
                                  text-anchor="middle"
                                  dominant-baseline="central"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '18px', 
  fill: 'rgb(255, 255, 255)', 
  outlineWidth: '0px', 
  outlineColor: 'transparent' 
}}
                                >
                                  May
                                </text>
                              </g>
                              <g
                                transform="translate(-32.81612232392725,-103.69451993180569)"
                                opacity="1"
                                style={{ pointerEvents: 'none' }}
                              >
                                <text
                                  text-anchor="middle"
                                  dominant-baseline="central"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '18px', 
  fill: 'rgb(255, 255, 255)', 
  outlineWidth: '0px', 
  outlineColor: 'transparent' 
}}
                                >
                                  Jun
                                </text>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Customer Acquisition
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    New customers acquired over time
                  </p>
                </div>
                <div className="p-6">
                  <div className="aspect-[4/3]">
                    <div style={{ 
  width: '100%', 
  height: '100%' 
}}>
                      <div style={{position: "relative"}}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="354.671875"
                          height="266"
                          role="application"
                        >
                          <rect
                            width="354.671875"
                            height="266"
                            fill="transparent"
                          ></rect>
                          <g transform="translate(40,10)">
                            <g>
                              <line
                                opacity="1"
                                x1="0"
                                x2="0"
                                y1="0"
                                y2="216"
                                stroke="#f3f4f6"
                                stroke-width="1"
                              ></line>
                              <line
                                opacity="1"
                                x1="60.934375"
                                x2="60.934375"
                                y1="0"
                                y2="216"
                                stroke="#f3f4f6"
                                stroke-width="1"
                              ></line>
                              <line
                                opacity="1"
                                x1="121.86875"
                                x2="121.86875"
                                y1="0"
                                y2="216"
                                stroke="#f3f4f6"
                                stroke-width="1"
                              ></line>
                              <line
                                opacity="1"
                                x1="182.80312500000002"
                                x2="182.80312500000002"
                                y1="0"
                                y2="216"
                                stroke="#f3f4f6"
                                stroke-width="1"
                              ></line>
                              <line
                                opacity="1"
                                x1="243.7375"
                                x2="243.7375"
                                y1="0"
                                y2="216"
                                stroke="#f3f4f6"
                                stroke-width="1"
                              ></line>
                              <line
                                opacity="1"
                                x1="304.671875"
                                x2="304.671875"
                                y1="0"
                                y2="216"
                                stroke="#f3f4f6"
                                stroke-width="1"
                              ></line>
                            </g>
                            <g>
                              <line
                                opacity="1"
                                x1="0"
                                x2="304.671875"
                                y1="216"
                                y2="216"
                                stroke="#f3f4f6"
                                stroke-width="1"
                              ></line>
                              <line
                                opacity="1"
                                x1="0"
                                x2="304.671875"
                                y1="163"
                                y2="163"
                                stroke="#f3f4f6"
                                stroke-width="1"
                              ></line>
                              <line
                                opacity="1"
                                x1="0"
                                x2="304.671875"
                                y1="110"
                                y2="110"
                                stroke="#f3f4f6"
                                stroke-width="1"
                              ></line>
                              <line
                                opacity="1"
                                x1="0"
                                x2="304.671875"
                                y1="57"
                                y2="57"
                                stroke="#f3f4f6"
                                stroke-width="1"
                              ></line>
                              <line
                                opacity="1"
                                x1="0"
                                x2="304.671875"
                                y1="4"
                                y2="4"
                                stroke="#f3f4f6"
                                stroke-width="1"
                              ></line>
                            </g>
                            <g transform="translate(0,216)">
                              <g transform="translate(0,0)" style={{opacity: "1"}}>
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="0"
                                 style={{ 
  stroke: 'rgb(119, 119, 119)', 
  strokeWidth: '1' 
}}
                                ></line>
                                <text
                                  dominant-baseline="text-before-edge"
                                  text-anchor="middle"
                                  transform="translate(0,16) rotate(0)"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '11px', 
  fill: 'rgb(51, 51, 51)' 
}}
                                >
                                  Jan
                                </text>
                              </g>
                              <g
                                transform="translate(60.934375,0)"
                                style={{opacity: "1"}}
                              >
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="0"
                                 style={{ 
  stroke: 'rgb(119, 119, 119)', 
  strokeWidth: '1' 
}}
                                ></line>
                                <text
                                  dominant-baseline="text-before-edge"
                                  text-anchor="middle"
                                  transform="translate(0,16) rotate(0)"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '11px', 
  fill: 'rgb(51, 51, 51)' 
}}
                                >
                                  Feb
                                </text>
                              </g>
                              <g
                                transform="translate(121.86875,0)"
                                style={{opacity: "1"}}
                              >
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="0"
                                 style={{ 
  stroke: 'rgb(119, 119, 119)', 
  strokeWidth: '1' 
}}
                                ></line>
                                <text
                                  dominant-baseline="text-before-edge"
                                  text-anchor="middle"
                                  transform="translate(0,16) rotate(0)"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '11px', 
  fill: 'rgb(51, 51, 51)' 
}}
                                >
                                  Mar
                                </text>
                              </g>
                              <g
                                transform="translate(182.80312500000002,0)"
                                style={{opacity: "1"}}
                              >
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="0"
                                 style={{ 
  stroke: 'rgb(119, 119, 119)', 
  strokeWidth: '1' 
}}
                                ></line>
                                <text
                                  dominant-baseline="text-before-edge"
                                  text-anchor="middle"
                                  transform="translate(0,16) rotate(0)"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '11px', 
  fill: 'rgb(51, 51, 51)' 
}}
                                >
                                  Apr
                                </text>
                              </g>
                              <g
                                transform="translate(243.7375,0)"
                                style={{opacity: "1"}}
                              >
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="0"
                                 style={{ 
  stroke: 'rgb(119, 119, 119)', 
  strokeWidth: '1' 
}}
                                ></line>
                                <text
                                  dominant-baseline="text-before-edge"
                                  text-anchor="middle"
                                  transform="translate(0,16) rotate(0)"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '11px', 
  fill: 'rgb(51, 51, 51)' 
}}
                                >
                                  May
                                </text>
                              </g>
                              <g
                                transform="translate(304.671875,0)"
                                style={{opacity: "1"}}
                              >
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="0"
                                 style={{ 
  stroke: 'rgb(119, 119, 119)', 
  strokeWidth: '1' 
}}
                                ></line>
                                <text
                                  dominant-baseline="text-before-edge"
                                  text-anchor="middle"
                                  transform="translate(0,16) rotate(0)"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '11px', 
  fill: 'rgb(51, 51, 51)' 
}}
                                >
                                  Jun
                                </text>
                              </g>
                              <line
                                x1="0"
                                x2="304.671875"
                                y1="0"
                                y2="0"
                                style={{ 
  stroke: 'transparent', 
  strokeWidth: '1' 
}}
                              ></line>
                            </g>
                            <g transform="translate(0,0)">
                              <g
                                transform="translate(0,216)"
                                style={{opacity: "1"}}
                              >
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="0"
                                 style={{ 
  stroke: 'rgb(119, 119, 119)', 
  strokeWidth: '1' 
}}
                                ></line>
                                <text
                                  dominant-baseline="central"
                                  text-anchor="end"
                                  transform="translate(-16,0) rotate(0)"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '11px', 
  fill: 'rgb(51, 51, 51)' 
}}
                                >
                                  0
                                </text>
                              </g>
                              <g
                                transform="translate(0,163)"
                                style={{opacity: "1"}}
                              >
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="0"
                                 style={{ 
  stroke: 'rgb(119, 119, 119)', 
  strokeWidth: '1' 
}}
                                ></line>
                                <text
                                  dominant-baseline="central"
                                  text-anchor="end"
                                  transform="translate(-16,0) rotate(0)"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '11px', 
  fill: 'rgb(51, 51, 51)' 
}}
                                >
                                  50
                                </text>
                              </g>
                              <g
                                transform="translate(0,110)"
                                style={{opacity: "1"}}
                              >
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="0"
                                 style={{ 
  stroke: 'rgb(119, 119, 119)', 
  strokeWidth: '1' 
}}
                                ></line>
                                <text
                                  dominant-baseline="central"
                                  text-anchor="end"
                                  transform="translate(-16,0) rotate(0)"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '11px', 
  fill: 'rgb(51, 51, 51)' 
}}
                                >
                                  100
                                </text>
                              </g>
                              <g
                                transform="translate(0,57)"
                                style={{opacity: "1"}}
                              >
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="0"
                                 style={{ 
  stroke: 'rgb(119, 119, 119)', 
  strokeWidth: '1' 
}}
                                ></line>
                                <text
                                  dominant-baseline="central"
                                  text-anchor="end"
                                  transform="translate(-16,0) rotate(0)"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '11px', 
  fill: 'rgb(51, 51, 51)' 
}}
                                >
                                  150
                                </text>
                              </g>
                              <g transform="translate(0,4)" style={{opacity: "1"}}>
                                <line
                                  x1="0"
                                  x2="0"
                                  y1="0"
                                  y2="0"
                                 style={{ 
  stroke: 'rgb(119, 119, 119)', 
  strokeWidth: '1' 
}}
                                ></line>
                                <text
                                  dominant-baseline="central"
                                  text-anchor="end"
                                  transform="translate(-16,0) rotate(0)"
                                  style={{ 
  fontFamily: 'sans-serif', 
  fontSize: '11px', 
  fill: 'rgb(51, 51, 51)' 
}}
                                >
                                  200
                                </text>
                              </g>
                              <line
                                x1="0"
                                x2="0"
                                y1="0"
                                y2="216"
                                style={{ 
  stroke: 'transparent', 
  strokeWidth: '1' 
}}
                              ></line>
                            </g>
                            <path
                              d="M0,152L60.934,165L121.869,29L182.803,133L243.738,114L304.672,0"
                              fill="none"
                              stroke-width="2"
                              stroke="#e11d48"
                            ></path>
                            <path
                              d="M0,170L60.934,71L121.869,151L182.803,62L243.738,188L304.672,53"
                              fill="none"
                              stroke-width="2"
                              stroke="#2563eb"
                            ></path>
                            <g>
                              <g
                                transform="translate(304.671875, 0)"
                                style={{ pointerEvents: 'none' }}
                              >
                                <circle
                                  r="3"
                                  fill="#e11d48"
                                  stroke="transparent"
                                  stroke-width="0"
                                  style={{ pointerEvents: 'none' }}
                                ></circle>
                              </g>
                              <g
                                transform="translate(243.7375, 114)"
                                style={{ pointerEvents: 'none' }}
                              >
                                <circle
                                  r="3"
                                  fill="#e11d48"
                                  stroke="transparent"
                                  stroke-width="0"
                                  style={{ pointerEvents: 'none' }}
                                ></circle>
                              </g>
                              <g
                                transform="translate(182.80312500000002, 133)"
                                style={{ pointerEvents: 'none' }}
                              >
                                <circle
                                  r="3"
                                  fill="#e11d48"
                                  stroke="transparent"
                                  stroke-width="0"
                                  style={{ pointerEvents: 'none' }}
                                ></circle>
                              </g>
                              <g
                                transform="translate(121.86875, 29)"
                                style={{ pointerEvents: 'none' }}
                              >
                                <circle
                                  r="3"
                                  fill="#e11d48"
                                  stroke="transparent"
                                  stroke-width="0"
                                  style={{ pointerEvents: 'none' }}
                                ></circle>
                              </g>
                              <g
                                transform="translate(60.934375, 165)"
                                style={{ pointerEvents: 'none' }}
                              >
                                <circle
                                  r="3"
                                  fill="#e11d48"
                                  stroke="transparent"
                                  stroke-width="0"
                                  style={{ pointerEvents: 'none' }}
                                ></circle>
                              </g>
                              <g
                                transform="translate(0, 152)"
                                style={{ pointerEvents: 'none' }}
                              >
                                <circle
                                  r="3"
                                  fill="#e11d48"
                                  stroke="transparent"
                                  stroke-width="0"
                                  style={{ pointerEvents: 'none' }}
                                ></circle>
                              </g>
                              <g
                                transform="translate(304.671875, 53)"
                                style={{ pointerEvents: 'none' }}
                              >
                                <circle
                                  r="3"
                                  fill="#2563eb"
                                  stroke="transparent"
                                  stroke-width="0"
                                  style={{ pointerEvents: 'none' }}
                                ></circle>
                              </g>
                              <g
                                transform="translate(243.7375, 188)"
                                style={{ pointerEvents: 'none' }}
                              >
                                <circle
                                  r="3"
                                  fill="#2563eb"
                                  stroke="transparent"
                                  stroke-width="0"
                                  style={{ pointerEvents: 'none' }}
                                ></circle>
                              </g>
                              <g
                                transform="translate(182.80312500000002, 62)"
                                style={{ pointerEvents: 'none' }}
                              >
                                <circle
                                  r="3"
                                  fill="#2563eb"
                                  stroke="transparent"
                                  stroke-width="0"
                                  style={{ pointerEvents: 'none' }}
                                ></circle>
                              </g>
                              <g
                                transform="translate(121.86875, 151)"
                                style={{ pointerEvents: 'none' }}
                              >
                                <circle
                                  r="3"
                                  fill="#2563eb"
                                  stroke="transparent"
                                  stroke-width="0"
                                  style={{ pointerEvents: 'none' }}
                                ></circle>
                              </g>
                              <g
                                transform="translate(60.934375, 71)"
                                style={{ pointerEvents: 'none' }}
                              >
                                <circle
                                  r="3"
                                  fill="#2563eb"
                                  stroke="transparent"
                                  stroke-width="0"
                                  style={{ pointerEvents: 'none' }}
                                ></circle>
                              </g>
                              <g
                                transform="translate(0, 170)"
                                style={{ pointerEvents: 'none' }}
                              >
                                <circle
                                  r="3"
                                  fill="#2563eb"
                                  stroke="transparent"
                                  stroke-width="0"
                                  style={{ pointerEvents: 'none' }}
                                ></circle>
                              </g>
                            </g>
                            <g transform="translate(0,0)">
                              <rect
                                data-ref="mesh-interceptor"
                                width="304.671875"
                                height="216"
                                fill="red"
                                opacity="0"
                                style={{cursor: "auto"}}
                              ></rect>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
