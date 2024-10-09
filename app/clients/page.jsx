"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

const mockData = [
  {
    id: 1,
    name: "Full Name",
    age: "Age, Sex, Pronouns",
    healthscore: 845,
    lastInteraction: "Aug 12 2024",
  },
  {
    id: 2,
    name: "Full Name",
    age: "Age, Sex, Pronouns",
    healthscore: 845,
    lastInteraction: "Aug 12 2024",
  },
  {
    id: 3,
    name: "Full Name",
    age: "Age, Sex, Pronouns",
    healthscore: 845,
    lastInteraction: "Aug 12 2024",
  },
  {
    id: 4,
    name: "Full Name",
    age: "Age, Sex, Pronouns",
    healthscore: 845,
    lastInteraction: "Aug 12 2024",
  },
  {
    id: 5,
    name: "Full Name",
    age: "Age, Sex, Pronouns",
    healthscore: 845,
    lastInteraction: "Aug 12 2024",
  },
  {
    id: 6,
    name: "Full Name",
    age: "Age, Sex, Pronouns",
    healthscore: 845,
    lastInteraction: "Aug 12 2024",
  },
  {
    id: 7,
    name: "Full Name",
    age: "Age, Sex, Pronouns",
    healthscore: 845,
    lastInteraction: "Aug 12 2024",
  },
  {
    id: 8,
    name: "Full Name",
    age: "Age, Sex, Pronouns",
    healthscore: 845,
    lastInteraction: "Aug 12 2024",
  },
];

const ClientsData = () => {
  const [data, setData] = useState(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  // Calculate the current rows to display
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Search filtering
  useEffect(() => {
    const filteredData = mockData.filter((row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  }, [searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="p-4">
      {/* Filters */}
      <div className="flex justify-between mb-4">
        <div className="space-x-2">
          <Button variant="outline">All time</Button>
          <Button variant="outline">US, AU, +4</Button>
          <Button variant="outline">More filters</Button>
        </div>
        <Input
          type="text"
          placeholder="Search"
          className="w-1/4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden border rounded-lg">
        <Table className="w-full border-b">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60%]">
                <div className="flex items-center gap-2">
                  <Checkbox className="bg-gray-200" /> Clients
                </div>
              </TableHead>
              <TableHead className="text-center">Healthscore</TableHead>
              <TableHead className="text-center">Last Interaction</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Checkbox className="bg-gray-200" />
                    <img
                      src="https://via.placeholder.com/40"
                      alt="User Avatar"
                      className="rounded-full w-10 h-10"
                    />
                    <div>
                      <p>{row.name}</p>
                      <p className="text-muted-foreground text-sm">{row.age}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">{row.healthscore}</TableCell>
                <TableCell className="text-center">
                  {row.lastInteraction}
                </TableCell>
                <TableCell className="flex space-x-2 text-center">
                  <Button variant="ghost" size="icon">
                    {/* <Icons.phone /> */}
                  </Button>
                  <Button variant="ghost" size="icon">
                    {/* <Icons.edit /> */}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* {pageination}     */}
        <div className="flex justify-between items-center mt-4">
          <Button
            variant="outline"
            onClick={() =>
              setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
            }
          >
            Previous
          </Button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <Button
            variant="outline"
            onClick={() =>
              setCurrentPage(
                currentPage < totalPages ? currentPage + 1 : totalPages
              )
            }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClientsData;
