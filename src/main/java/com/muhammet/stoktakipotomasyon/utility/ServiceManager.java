package com.muhammet.stoktakipotomasyon.utility;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public class ServiceManager<T, ID> {
    private final JpaRepository<T,ID> repository;

    public ServiceManager(JpaRepository<T,ID> repository) {
        this.repository = repository;
    }

    public T save(T entity) {
        return repository.save(entity);
    }
    public Iterable<T> saveAll(Iterable<T> entities) {
        return repository.saveAll(entities);
    }
    public Optional<T> findById(ID id) {
        return repository.findById(id);
    }
    public void delete(T entity) {
        repository.delete(entity);
    }
    public void deleteById(ID id) {
        repository.deleteById(id);
    }
    public List<T> findAll() {
        return repository.findAll();
    }
    public List<T> findAllById(Iterable<ID> ids) {
        return repository.findAllById(ids);
    }

}
