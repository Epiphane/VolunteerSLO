-- phpMyAdmin SQL Dump
-- version 3.5.7
-- http://www.phpmyadmin.net
--
-- Host: elliot.db
-- Generation Time: Apr 07, 2014 at 01:46 AM
-- Server version: 5.3.12-MariaDB
-- PHP Version: 5.3.27-nfsn1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `volunteer`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE IF NOT EXISTS `events` (
  `title` text NOT NULL,
  `description` mediumtext NOT NULL,
  `img_url` text NOT NULL,
  `max_volunteers` int(11) NOT NULL,
  `event_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`event_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`title`, `description`, `img_url`, `max_volunteers`, `event_id`) VALUES
('you', 'whtaever', 'http://i.imgur.com/wetpuml.gif', -2, 1),
('you', 'whtaever', 'http://i.imgur.com/wetpuml.gif', -2, 2),
('cool thing', 'new description', 'google.com', 35, 3);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
