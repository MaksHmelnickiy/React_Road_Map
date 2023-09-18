// Задача: Создание хука для работы с локальным хранилищем

// Создайте собственный хук useMyHook, который будет облегчать работу с локальным хранилищем браузера (localStorage).
// Требования:
// 1. Хук должен предоставлять функциональность для чтения, записи и удаления данных в локальном хранилище.
// 2. Хук должен быть универсальным и легко использоваться в различных компонентах.
// 3. Хук должен предоставлять методы для:
//    Получения значения по ключу из локального хранилища.
//    Установки значения по ключу в локальном хранилище.
//    Удаления значения по ключу из локального хранилища.
// 4. Хук должен поддерживать типизацию и возвращать значения с учетом их типов.
// 5. Хук должен обеспечивать обработку ошибок, связанных с доступом к локальному хранилищу (например, при переполнении квоты).
// 6. Создайте пример использования useMyHook в компоненте, где можно сохранять и извлекать данные из локального хранилища.

// Создание такого хука позволит вам улучшить управление состоянием и сохранять данные между сеансами пользователя, используя локальное хранилище браузера.

import React from "react";

export const myHookTask1 = () => {
  const getStorage = (key: string = '') => {
    try {
      const value = localStorage.getItem(key);
      return value !== null ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Error while reading from localStorage:", error);
      return null;
    }
  };

  const setStorage = (key: string = '', value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error("Error while writing to localStorage:", error);
      return false;
    }
  };

  const removeStorage = (key: string = '') => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error("Error while removing from localStorage:", error);
      return false;
    }
  };

  return {
    getStorage,
    setStorage,
    removeStorage
  };
}

