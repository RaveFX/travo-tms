package com.travo.travobackend.model;

import jakarta.persistence.*;

import javax.swing.*;

@Entity
public class Guide {
    @Id
    @GeneratedValue
    private Long Guide_id;

    @Column(nullable = false,length = 12)
    private Integer NIC;
    private Integer Land_num;
    private String Bank;
    private String Branch;
    private Integer Acc_num;
    private String Acc_name;
//    @JoinColumn(name = "User_id")
//    private User user;

    public Long getGuide_id() {
        return Guide_id;
    }

    public void setGuide_id(Long guide_id) {
        Guide_id = guide_id;
    }

    public Integer getNIC() {
        return NIC;
    }

    public void setNIC(Integer NIC) {
        this.NIC = NIC;
    }

    public Integer getLand_num() {
        return Land_num;
    }

    public void setLand_num(Integer land_num) {
        Land_num = land_num;
    }

    public String getBank() {
        return Bank;
    }

    public void setBank(String bank) {
        Bank = bank;
    }

    public String getBranch() {
        return Branch;
    }

    public void setBranch(String branch) {
        Branch = branch;
    }

    public Integer getAcc_num() {
        return Acc_num;
    }

    public void setAcc_num(Integer acc_num) {
        Acc_num = acc_num;
    }

    public String getAcc_name() {
        return Acc_name;
    }

    public void setAcc_name(String acc_name) {
        Acc_name = acc_name;
    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
}
