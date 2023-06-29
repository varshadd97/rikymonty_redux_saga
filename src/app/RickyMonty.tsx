/** @format */
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUserAsync, fetchEpisode } from "./store/action";

const RickyMonty = ({ data, loading, error, fetchData, fetchEpisode }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(currentPage);
    fetchEpisode(currentPage);
  }, [currentPage]);

  useEffect(() => {
    fetchEpisode(currentPage);
    fetchData(currentPage);
  }, []);

  if (data == null || data == undefined || data?.user?.data == null) {
    return <div> Loading...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClickPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    setCurrentPage((pre) => pre + 1);
  };

  return (
    <>
      <div className="mx-auto mt-4" style={{ width: "200px" }}>
        <input
          type="text"
          className="p-2 rounded-3"
          placeholder="Search Character"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="grid-container container ">
        {data &&
          data?.user?.data[1]
            ?.slice(0, 6)
            ?.filter((val: any) => {
              if (val == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item: any, index: any) => {
              return (
                <div className="card">
                  <div className="d-flex justify-content-start bg-secondary bg-gradient text-white check">
                    <div>
                      <Image
                        src={item?.image}
                        alt="rickymonty"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="ps-3 pt-3 ">
                      <h2>{item?.name}</h2>
                      <div>
                        {" "}
                        <span
                          style={{
                            backgroundColor:
                              item?.status == "Alive"
                                ? "green"
                                : item?.status == "Dead"
                                ? "red"
                                : "lightGrey",
                            height: "15",
                            width: "15",
                            borderRadius: "25px",
                            color:
                              item?.status == "Alive"
                                ? "green"
                                : item?.status == "Dead"
                                ? "red"
                                : "lightGrey",
                            marginRight: "5px",
                          }}
                        >
                          00
                        </span>
                        status : {item?.status}
                      </div>
                      <div className="mt-2 text">Last known location : </div>
                      <div>{item?.location?.name}</div>
                      <div className="mt-2 text">First see in : </div>
                      <div>
                        {data &&
                          data?.episode?.data[1]
                            ?.slice(0, 1)
                            ?.map((itm: any) => {
                              return <span>{itm?.name}</span>;
                            })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div className="mx-auto mt-4" style={{ width: "200px" }}>
        <button onClick={handleClickPrevious} className="m-4 bg-light p-2">
          Previous
        </button>

        <button onClick={handleClickNext} className="bg-light p-2">
          next
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    data: state,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = {
  fetchData: fetchUserAsync,
  fetchEpisode: fetchEpisode,
};

export default connect(mapStateToProps, mapDispatchToProps)(RickyMonty);
