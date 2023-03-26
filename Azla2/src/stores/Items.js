import { ref, toRaw } from "vue";
import { defineStore } from "pinia";
export const useItemsStore = defineStore("items", () => {
  const items = ref([
    {
      name: "Chocola figurine",
      tags: ["Figurine", "Nekopara", "Cat girl"],
      imgUrl:
        "https://animestore.cz/400722-thickbox_default/nekopara-pvc-statue-100-chocola-10-cm.jpg",
      price: 10000,
      description: "Chocola is the best girl",
      isFavourite: false,
    },
    {
      name: "Chocola figurine",
      tags: ["Figurine", "Nekopara", "Cat girl"],
      imgUrl:
        "https://animestore.cz/400722-thickbox_default/nekopara-pvc-statue-100-chocola-10-cm.jpg",
      price: 10000,
      description: "Chocola is the best girl",
      isFavourite: false,
    },
    {
      name: "Chocola figurine",
      tags: ["Figurine", "Nekopara", "Cat girl"],
      imgUrl:
        "https://animestore.cz/400722-thickbox_default/nekopara-pvc-statue-100-chocola-10-cm.jpg",
      price: 10000,
      description: "Chocola is the best girl",
      isFavourite: false,
    },
    {
      name: "Chocola figurine",
      tags: ["Figurine", "Nekopara", "Cat girl"],
      imgUrl:
        "https://animestore.cz/400722-thickbox_default/nekopara-pvc-statue-100-chocola-10-cm.jpg",
      price: 10000,
      description: "Chocola is the best girl",
      isFavourite: false,
    },
    {
      name: "Chocola figurine",
      tags: ["Figurine", "Nekopara", "Cat girl"],
      imgUrl:
        "https://animestore.cz/400722-thickbox_default/nekopara-pvc-statue-100-chocola-10-cm.jpg",
      price: 10000,
      description: "Chocola is the best girl",
      isFavourite: false,
    },
    {
      name: "Chocola figurine",
      tags: ["Figurine", "Nekopara", "Cat girl"],
      imgUrl:
        "https://animestore.cz/400722-thickbox_default/nekopara-pvc-statue-100-chocola-10-cm.jpg",
      price: 10000,
      description: "Chocola is the best girl",
      isFavourite: false,
    },
  ]);
  function addItem(params) {
    items.value.push(params);
  }
  function getFilteredItems(...tags) {
    tags = toRaw(tags)
  
    
    return toRaw(items.value).filter((item) => {
    

      return item.tags.includes(tags);
    });
  }
  return {
    items,
    addItem,
    getFilteredItems,
  };
});
