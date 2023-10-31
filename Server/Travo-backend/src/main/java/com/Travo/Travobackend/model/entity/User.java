package com.Travo.Travobackend.model.entity;

import com.Travo.Travobackend.enumeration.Role;
import com.Travo.Travobackend.enumeration.Status;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.List;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
@Inheritance(strategy = InheritanceType.JOINED)
public class User implements UserDetails {
    @Id
    @GeneratedValue
    private Integer user_id;
    private String email;
    private String password;
    private LocalDate registration_date;

    @PrePersist
    protected void onCreate() {
        registration_date = LocalDate.now();
    }

    @Enumerated(EnumType.STRING)
    private Status status;

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToOne(mappedBy = "user")
    private TokenDTO token;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<Reviews> reviews = new HashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<Reservation> reservations = new HashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<Trip> trips = new HashSet<>();

    @OneToMany(mappedBy = "user")
    private Set<TripMember> tripMembers = new HashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<TicketBooking> ticketBookings = new HashSet<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
