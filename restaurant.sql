-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2019 at 07:15 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

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

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`CId`, `CName`, `CPassword`, `CDoB`, `CEmail`, `CPhone`, `TId`) VALUES
(1, 'Anand', 'anand', '2019-01-01', 'anand026@gmail.com', '87886855', 0),
(3, 'vishal', 'vishal', '2019-01-03', 'vishal070@gmail.com', '34635465', 0),
(4, 'shivani', 'shivani', '2019-05-01', 'shivani030@gmail.com', '87685544', 0),
(6, 'anoop', 'anoop', '2019-05-03', 'anoop029@gmail.com', '8976666556', 0),
(7, 'aman', 'aman', '2019-01-01', 'aman@gmail.com', '987654321', 0),
(8, 'John Doe', 'doe', '2019-01-01', 'qwerty@gmail.com', '1234567', 0),
(9, 'pranav', 'pranav', '2012-01-01', 'pranav@gmail.com', '877655655', 0),
(10, 'anay', 'anay', '2019-01-01', 'anay@naik.com', '676786775', 0),
(11, 'nandan', 'nandan', '2019-07-01', 'nandan@pd.com', '898768787', 0),
(12, 'sandy', 'vienna', '1969-01-01', 'sandy69@gmail.com', '69696969', 0),
(13, 'newUser11', 'newUser', '2012-01-01', 'newUser11@gmail.com', '88766859', 0);

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
  `RName` varchar(50) NOT NULL,
  `RAddress` varchar(50) NOT NULL,
  `RMap` blob NOT NULL,
  `RFastFood` tinyint(1) NOT NULL,
  `RTables` int(11) NOT NULL,
  `RCuisine` enum('Goan','Continental','Chinese','North Indian','South Indian') NOT NULL,
  `RRating` int(11) NOT NULL,
  `RTiming` time(6) NOT NULL,
  `RImg` varchar(110) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rest_info`
--

INSERT INTO `rest_info` (`RId`, `RName`, `RAddress`, `RMap`, `RFastFood`, `RTables`, `RCuisine`, `RRating`, `RTiming`, `RImg`) VALUES
(111, 'Red Chillies', 'Panjim, Goa', '', 0, 30, 'Continental', 4, '11:24:27.000000', 'continental2.jpg'),
(112, 'Goan Majestic', 'Ponda, Goa', '', 0, 22, 'Goan', 3, '06:28:00.000000', 'kfc.jpg'),
(113, 'Sher-e-Punjab', 'Margao, Goa', '', 0, 50, 'North Indian', 5, '11:00:00.000000', 'goan.jpg'),
(114, 'Navtara', 'Vasco, Goa', '', 1, 30, 'South Indian', 2, '10:00:00.000000', 'southindian.jpg'),
(115, 'KFC', 'Porvorim, Goa', '', 1, 50, 'Continental', 3, '13:00:00.000000', 'kfc.jpg\r\n');

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
  MODIFY `CId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
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
  MODIFY `RId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;
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
  MODIFY `SId` int(11) NOT NULL AUTO_INCREMENT;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
