import React, { useContext } from "react";
import { Text } from "../components/Text";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { ContextApi } from "../components/ContextApi";

const AuctionForm = () => {
  const { 
    date, setDate, 
    number, setNumber, 
    bidding, setBidding,
    maxrating, setMaxRating, 
    error, handleSubmit 
  } = useContext(ContextApi);

  return (
    <div className="my-24 flex justify-center items-center">
      <div className="relative w-full max-w-md flex flex-col gap-6 justify-center items-center">
        <div className="absolute inset-0 backdrop-blur-sm sm:backdrop-blur-md bg-white/5 border border-white/20 shadow-lg rounded-2xl z-0"></div>
        <div className="relative z-10 w-full flex flex-col gap-6 justify-center items-center bg-white/10 rounded-2xl px-6 py-10">
          <div className="text-center">
            <Text variant="subheading" className="text-white text-3xl font-semibold">
              Fill the auction details
            </Text>
            <Text className="mt-2 text-gray-200 text-sm">
              Enter the names of the teams and other displayed requirements
            </Text>
          </div>

          {error && <Text className="text-red-500 font-bold text-lg">{error}</Text>}

          {/* Form */}
          <form className="w-[90%] flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-2">
              <Input
                label="Auction date"
                type="date"
                className="col-span-1"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <Input
                label="Bidding Limit"
                type="number"
                className="col-span-1"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Input
                label="Max Rating"
                type="number"
                className="col-span-1"
                value={maxrating}
                onChange={(e) => setMaxRating(e.target.value)}
              />

              <Input
                label="Bidding per call"
                type="number"
                className="col-span-1"
                value={bidding}
                onChange={(e) => setBidding(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-3"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuctionForm;

