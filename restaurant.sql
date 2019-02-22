-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2019 at 07:50 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `creates_session`
--

CREATE TABLE `creates_session` (
  `CId` int(11) NOT NULL,
  `SId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `CId` int(11) NOT NULL,
  `CName` varchar(50) NOT NULL,
  `CPassword` varchar(25) NOT NULL,
  `CDoB` date NOT NULL,
  `CEmail` varchar(50) NOT NULL,
  `CPhone` varchar(15) NOT NULL,
  `TId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `describes_fooddetails`
--

CREATE TABLE `describes_fooddetails` (
  `ItemID` int(11) NOT NULL,
  `Type` varchar(50) NOT NULL,
  `Name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `dines_at`
--

CREATE TABLE `dines_at` (
  `CId` int(11) NOT NULL,
  `RId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `food_menu`
--

CREATE TABLE `food_menu` (
  `ItemID` int(11) NOT NULL,
  `RId` int(11) NOT NULL,
  `Rate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gives_order`
--

CREATE TABLE `gives_order` (
  `CId` int(11) NOT NULL,
  `OId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_chosen`
--

CREATE TABLE `order_chosen` (
  `OId` int(11) NOT NULL,
  `ItemID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `PId` int(11) NOT NULL,
  `Cashless` tinyint(1) NOT NULL,
  `Status` enum('Not Paid','Paid','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rest_info`
--

CREATE TABLE `rest_info` (
  `RId` int(11) NOT NULL,
  `RName` int(11) NOT NULL,
  `RAddress` varchar(50) NOT NULL,
  `RMap` blob NOT NULL,
  `RFastFood` tinyint(1) NOT NULL,
  `RTables` int(11) NOT NULL,
  `RCuisine` enum('Goan','Continental','Chinese','North Indian','South Indian') NOT NULL,
  `RRating` int(11) NOT NULL,
  `RTiming` time(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `r_order`
--

CREATE TABLE `r_order` (
  `OId` int(11) NOT NULL,
  `Status` tinyint(1) NOT NULL,
  `Bill_amount` int(11) NOT NULL,
  `list` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `r_table`
--

CREATE TABLE `r_table` (
  `TId` int(10) NOT NULL,
  `RId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `session`
--

CREATE TABLE `session` (
  `SId` int(11) NOT NULL,
  `TId` int(11) NOT NULL,
  `PId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `takes_order`
--

CREATE TABLE `takes_order` (
  `RId` int(11) NOT NULL,
  `OId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `creates_session`
--
ALTER TABLE `creates_session`
  ADD PRIMARY KEY (`SId`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`CId`);

--
-- Indexes for table `food_menu`
--
ALTER TABLE `food_menu`
  ADD PRIMARY KEY (`ItemID`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`PId`);

--
-- Indexes for table `rest_info`
--
ALTER TABLE `rest_info`
  ADD PRIMARY KEY (`RId`);

--
-- Indexes for table `r_order`
--
ALTER TABLE `r_order`
  ADD PRIMARY KEY (`OId`);

--
-- Indexes for table `r_table`
--
ALTER TABLE `r_table`
  ADD PRIMARY KEY (`TId`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`SId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `creates_session`
--
ALTER TABLE `creates_session`
  MODIFY `SId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `CId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `food_menu`
--
ALTER TABLE `food_menu`
  MODIFY `ItemID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `PId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rest_info`
--
ALTER TABLE `rest_info`
  MODIFY `RId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `r_order`
--
ALTER TABLE `r_order`
  MODIFY `OId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `r_table`
--
ALTER TABLE `r_table`
  MODIFY `TId` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `session`
--
ALTER TABLE `session`
  MODIFY `SId` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
