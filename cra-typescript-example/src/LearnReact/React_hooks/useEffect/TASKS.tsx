import { useEffect, useState } from "react";

export const MyTaskUseEffect:React.FC = () => {

// ⁡⁣⁣⁢TASK N1⁡
//  Загрузка и отображение случайного изображения при загрузке страницы:
// Используйте API, которое возвращает случайное изображение (например, Unsplash API).
// При загрузке страницы с помощью useEffect выполните запрос к API и получите URL случайного изображения.
// Обновите состояние компонента с полученным URL изображения.
// Отобразите изображение на странице.
  const [img, setImg] = useState<string>()
  const [sec, setSec] = useState<number>(0)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://picsum.photos/seed/picsum/200/300')
      setImg(response?.url);
    }
    fetchData()
  },[])
// ⁡⁣⁣⁢END TASK N1 ⁡/

// ⁡⁣⁣⁢TASK N1 ⁡
// Отслеживание времени, проведенного на странице:
// Используйте useEffect для установки таймера при загрузке страницы.
// Обновляйте состояние компонента с каждым прошедшим секундой.
// Отобразите время, проведенное на странице, на экране.
  useEffect(() => {
    const timer = setTimeout(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => { // должна вызываться ⁡⁢⁣⁣функция очистки⁡ как мы сделали. а не результат как ⁡⁣⁣⁢return clearInterval(timer)⁡/
      clearInterval(timer);
    };
  },[sec])
  return (
    <>
      <div><b>Task N1 </b><img src={img} alt="" /></div>
      <div><b>Task N2 </b><i>{sec}</i></div>
    </>
  )
}