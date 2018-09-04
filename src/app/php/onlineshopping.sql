-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2018 at 09:42 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlineshopping`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created`, `modified`) VALUES
(1, 'Category 1', '2018-09-01 10:32:41', '2018-09-01 10:32:41'),
(2, 'Category 2', '2018-09-01 10:32:41', '2018-09-01 10:32:41');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `category_id`, `imageUrl`, `created`, `modified`) VALUES
(1, 'Bread 1', '10', 1, 'https://edge.alluremedia.com.au/m/l/2009/06/Bread.jpg', '2018-08-28 09:01:42', '2018-08-28 09:01:42'),
(2, 'Bread 2', '13', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBGDjmJGSELLX7eXTw1uht8NuxnZMVrpMimcHwl--megQIsLbEg', '2018-08-28 09:01:42', '2018-08-28 09:01:42'),
(6, 'jhjkhjk', '16', 2, 'jhjkkjh', '2018-09-02 00:05:42', '2018-09-02 00:05:42'),
(7, 'Tesadtsg', '4', 1, 'FKjkljef', '2018-09-02 00:11:47', '2018-09-02 00:11:47'),
(8, 'Product10', '32', 1, 'product10 url', '2018-09-02 00:34:51', '2018-09-02 00:34:51'),
(9, 'Product11', '13', 2, 'htt', '2018-09-02 00:48:20', '2018-09-02 00:48:20'),
(10, 'Product12', '24', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFEnAEWCVq0C8zeyKEiq6lFhcG4KskXI9HUr5KTDo1wYke_xYiw', '2018-09-02 00:50:59', '2018-09-02 00:50:59'),
(11, 'jkgjkg', '17', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFEnAEWCVq0C8zeyKEiq6lFhcG4KskXI9HUr5KTDo1wYke_xYiw', '2018-09-03 08:14:57', '2018-09-03 08:14:57'),
(12, 'Bread 1', '15', 1, 'https://edge.alluremedia.com.au/m/l/2009/06/Bread.jpg', '2018-09-03 09:02:17', '2018-09-03 09:02:17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(150) NOT NULL,
  `lastname` varchar(150) NOT NULL,
  `username` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` tinyint(4) NOT NULL DEFAULT '2' COMMENT '1- admin, 2- learner',
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `password`, `email`, `role`, `created`, `modified`) VALUES
(1, 'Pramod', 'Muchute', 'pramod', '123456', 'pramod.muchute@gmail.com', 1, '2018-09-04 00:00:00', '2018-09-04 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
