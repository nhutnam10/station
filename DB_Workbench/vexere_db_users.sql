-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vexere_db
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `numberPhone` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `avatar` varchar(110) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `type` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idusers_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'nhutanm','nnn@gmail.com','121212','0921902102','http://localhost:3000/public\\images\\avatars\\1683082751713_Pink_Panther.jpg','Client','2023-05-02 13:51:53','2023-05-03 02:59:11'),(2,'nhutanm','nnn@gmail.com','$2a$10$bGoPIbUvMrxWgPogmbjTC.P3PlulnagbTl733d9oLNADZPh3e.R.a','0921902102','','Client','2023-05-02 14:04:54','2023-05-02 14:04:54'),(3,'nhutnam11','nam@gmail.com','$2a$10$opl3xUXb1BaKYCAouhWkx.E0cnGSILx.0FlgsvDwpRbtD7pFvSn/q','0921902102','','ADMIN','2023-05-02 14:19:18','2023-05-02 14:19:18'),(4,'hehehe','hehe@gmail.com','$2a$10$zQexfWoWM14jtlkMiA.AresmjOTwtvfJzDFyTA75XSWNwRm7BU3BO','0921902102','http://localhost:3000/public\\images\\user\\1683100076853_pte.PNG','Client','2023-05-03 01:33:57','2023-05-03 07:47:56'),(5,'hehehe','hehe@gmail.com','$2a$10$UcW.T8dFhg2SDOArwJNf8Ov/7/5uVeCZKQve2ySLQxVonS7ErfKJe','0921902102','','Client','2023-05-03 08:20:09','2023-05-03 08:20:09'),(6,'nhut anmmmm','anmmmm@gmail.com','$2a$10$GgFvMk5OckdgsmHcwahQjOW3qVAUyOJrZ/lR/Z5yF42CemmYvFC9S','0921902102','','Client','2023-05-03 11:43:37','2023-05-03 11:43:37');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-09 22:04:23
