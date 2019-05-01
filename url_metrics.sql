-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 01, 2019 at 05:53 AM
-- Server version: 8.0.13-4
-- PHP Version: 7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Ybi1BVrtgr`
--

-- --------------------------------------------------------

--
-- Table structure for table `url_metrics`
--

CREATE TABLE `url_metrics` (
  `url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `response_code` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `response_time` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dns_time` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ipadress` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `error` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `url_metrics`
--

INSERT INTO `url_metrics` (`url`, `response_code`, `response_time`, `dns_time`, `ipadress`, `date`, `error`) VALUES
('12.2.2', NULL, NULL, NULL, NULL, NULL, NULL),
('12.2.2', NULL, NULL, NULL, NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
