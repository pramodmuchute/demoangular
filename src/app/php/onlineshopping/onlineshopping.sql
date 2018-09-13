-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2018 at 08:28 PM
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
(1, 'Bread', '2018-09-01 10:32:41', '2018-09-01 10:32:41'),
(2, 'Dairy', '2018-09-01 10:32:41', '2018-09-01 10:32:41'),
(3, 'Fruits', '2018-09-01 10:32:41', '2018-09-01 10:32:41'),
(4, 'Vegetables', '2018-09-01 10:32:41', '2018-09-01 10:32:41');

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
(1, 'French Bread Pizza', '148', 1, 'https://www.seriouseats.com/recipes/images/2013/03/20130305-french-bread-pizza-pizza-lab-28.jpg', '2018-08-28 09:01:42', '2018-08-28 09:01:42'),
(2, 'Spinach Bacon Alfredo French Bread Pizza', '25', 2, 'http://4.bp.blogspot.com/-DYLnBdcuqY8/UUoFce7L85I/AAAAAAAAJn8/QmCrht3Vc90/s1600/French+Bread+Pizza.jpg', '2018-08-28 09:01:42', '2018-08-28 09:01:42'),
(13, 'Garlic bread', '18', 1, 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTEhUTExMWFRUWFyAYGBgYGBoaHRsfGBsaGB4aHhodHSggHRolHRgYITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGzAlICYvNS0yLS0vLS8vMi0tLS0tLTUtLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/', '2018-09-08 10:54:33', '2018-09-08 10:54:33'),
(14, 'Multi-Grain Bread with Cornmeal', '70', 1, 'http://www.pamelasproducts.com/wp-content/uploads/2012/09/Multi-Grain-Bread-with-Corn.jpg', '2018-09-13 22:35:29', '2018-09-13 22:35:29'),
(15, 'Milk', '23', 2, 'https://cdn-image.realsimple.com/sites/default/files/styles/portrait_435x518/public/milk-bottle.jpg?itok=2HmRIinE', '2018-09-13 22:37:13', '2018-09-13 22:37:13'),
(16, 'Butter', '45', 2, 'https://thumbs.dreamstime.com/b/fromage-suisse-avec-des-trous-18911609.jpg', '2018-09-13 22:38:54', '2018-09-13 22:38:54'),
(17, 'Ice Cream', '56', 2, 'http://www.paganini.ie/wp-content/uploads/2017/04/raspb.jpg', '2018-09-13 22:40:03', '2018-09-13 22:40:03'),
(18, 'Froozer', '23', 3, 'http://www.froozer.com/wp-content/uploads/2018/02/productpage-fruitpile.jpg', '2018-09-13 22:42:32', '2018-09-13 22:42:32'),
(19, 'Canned fruit & vegetables', '24', 3, 'http://www.agrofoods.cl/var/plain_site/storage/images/productos/frutas-y-verduras-en-conservas/283-5-esl-ES/Frutas-y-verduras-en-conservas_category_full.jpg', '2018-09-13 22:43:27', '2018-09-13 22:43:27'),
(20, 'Pre-cooked vegetables', '34', 4, 'https://nordefood.eu/wp-content/uploads/2017/05/Vegetables2.jpg', '2018-09-13 22:44:22', '2018-09-13 22:44:22'),
(21, 'Findus Frozen Royal Vegetable Mix', '34', 4, 'https://www.coopathome.ch/img/produkte/300_300/RGB/5832526_001.jpg?_=1478597114944', '2018-09-13 22:46:15', '2018-09-13 22:46:15');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
