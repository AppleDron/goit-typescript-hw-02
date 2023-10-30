/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

const top: Pick<AllType, "name" | "position"> = {
  name: "Andrew",
  position: 25,
};

const bottom: Pick<AllType, "color" | "weight"> = {
  color: "blue",
  weight: 65,
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

compare(top, bottom);

export {};
