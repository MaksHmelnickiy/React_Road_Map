// Хук ⁡⁢⁣⁣useRef⁡ в React ⁡⁣⁣⁢предоставляет ссылку на DOM-элемент⁡ или другой реактивный объект и ⁡⁢⁣⁣сохраняет его между рендерами компонента⁡,
// при этом ⁡⁢⁣⁢не вызывая⁡ ⁡⁣⁣⁢повторного рендеринга⁡ при их изменении.
// Он часто используется для доступа к ⁡⁣⁢⁣DOM-элементам⁡, ⁡⁣⁢⁣управления фокусом⁡, ⁡⁣⁢⁣анимациям⁡ и другим манипуляциям с элементами, 
// которые могут потребовать сохранения ссылки на элемент между рендерами.
import { useEffect, useRef } from 'react';

export const MyUseRef = () => {

  // ​‌‍‌⁡⁢⁢⁡⁣⁣⁢Ниже описанны шаги работы useRef⁡​ /

  // ⁡⁣⁢⁣1.)⁡ ⁡⁢⁣⁣Создание ссылок⁡: Вы можете создать объект ссылки с помощью ⁡⁣⁢⁢const⁡ ⁡⁣⁢⁣myRef = useRef(initialValue)⁡. 
  // Этот объект будет иметь свойство ⁡⁢⁣⁣current⁡, в котором вы можете ⁡⁣⁣⁢хранить данные⁡. ⁡⁢⁣⁣initialValue⁡ - это начальное значение, которое будет ⁡⁣⁣⁢установлено в current⁡.

  // ⁡⁣⁢⁣2.)⁡ ⁡⁢⁣⁣Не вызывает повторный рендер⁡: ⁡⁣⁣⁢Изменение current⁡ в объекте ссылки myRef ⁡⁢⁣⁢не приводит⁡ ⁡⁢⁣⁣к повторному рендерингу⁡ компонента. 
  // Это позволяет ⁡⁣⁣⁢хранить значения между рендерами⁡ без изменения состояния компонента.

  // ⁡⁣⁢⁣3.)⁡ ⁡⁢⁣⁣Использование с DOM-элементами⁡: Вы можете использовать useRef для получения ⁡⁣⁣⁢доступа к DOM-элементам⁡, например, для изменения их свойств или вызова методов.
    const inputRef = useRef<HTMLInputElement | null>(null);;

  useEffect(() => {

    // ⁡⁣⁢⁣4.)⁡⁡⁡⁣⁣⁢ Доступ к текущему значению⁡⁡: Чтобы получить доступ к текущему значению ⁡⁢⁣⁣useRef⁡, вы используете свойство ⁡⁢⁣⁣current⁡.
    console.log(inputRef.current)

    // В этом ⁡⁣⁣⁢примере⁡ при монтировании компонента ⁡⁢⁣⁣useEffect⁡ устанавливает ⁡⁣⁣⁢фокус⁡ на input элементе с использованием ⁡⁣⁢⁣inputRef.current.⁡⁢⁣⁣focus()⁡⁡.
    inputRef.current?.focus()
  },[])
  return <>

  {/* ⁡⁣⁢⁣5.)⁡⁡⁡ ⁡⁣⁣⁢Привязка к DOM-элементу⁡: Чтобы ⁡⁣⁣⁢привязать⁡ ⁡⁢⁣⁣useRef⁡ к DOM-элементу, вы можете использовать его как атрибут ⁡⁢⁣⁣ref⁡ при создании элемента в JSX. */}
  <input type="text"  ref={inputRef}/>
  </>
}