"use client";
import React from "react";
import { TbSmartHome } from "react-icons/tb";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function layout({ children }) {
  const pathname = usePathname(); // Correct hook to get the current route

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  return (
    <div>
      <div className="mt-5">
        <Breadcrumb>
          <BreadcrumbList>
            {/* Always include the home breadcrumb */}
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <TbSmartHome className="w-5 h-5" />
              </BreadcrumbLink>
            </BreadcrumbItem>

            {pathSegments.length > 0 && <BreadcrumbSeparator />}

            {pathSegments.map((segment, index) => {
              const isLast = index === pathSegments.length - 1;
              const href = "/" + pathSegments.slice(0, index + 1).join("/");

              return (
                <div key={href} className="flex items-center">
                  <BreadcrumbItem>
                    {!isLast ? (
                      <BreadcrumbLink href={href} className="capitalize">
                        {segment}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="capitalize">
                        {segment}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {children}
    </div>
  );
}
