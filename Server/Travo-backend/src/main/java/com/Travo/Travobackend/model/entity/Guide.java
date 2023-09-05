package com.Travo.Travobackend.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "guide")
@PrimaryKeyJoinColumn(name="guide_id")
public class Guide extends User {
    private String fname;
    private String lname;
    private String nic;
    private String gender;
    private String bank;
    private String branch;
    private String acc_name;
    private Integer acc_num;
    private String qualifications;
    private String description;
}
