package com.Travo.Travobackend.service;

import com.Travo.Travobackend.repository.CommunityRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.sql.Timestamp;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageService {

    @Value("${image.upload.directory}")
    private String imageUploadDirectory; // Configure this in your application.properties or application.yml
    private final CommunityRepo communityRepo;

    public String uploadImage(MultipartFile file) throws IOException {

        String rootDirectory = System.getProperty("user.dir");
        System.out.println(rootDirectory);

        String imageUploadPath = rootDirectory + "/src/main/resources/static/posts/images";
        System.out.println(imageUploadPath);
        if (file.isEmpty()) {
            throw new IllegalArgumentException("Empty file provided");
        }

        try {
            //If there exists images in the request
            // Save images
            String fileName = file.getOriginalFilename();
            Path filePath = Paths.get(imageUploadPath, fileName);
            Files.write(filePath, file.getBytes());

            return fileName;
        } catch (IOException e) {
            e.printStackTrace();
            return "Error uploading files.";
        }
    }

    public String getImageName(Integer id) {

        return communityRepo.findPostImageById(id);

    }
}
