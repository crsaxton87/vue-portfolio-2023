<template>
  <div class="create">
    <div v-if="error">{{ error }}</div>
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-model="title" type="text" required />
      <label>Description:</label>
      <textarea v-model="desc" required></textarea>
      <label>Snippet:</label>
      <textarea v-model="snippet" required></textarea>
      <label>Price</label>
      <input v-model="price" type="number" step="0.01" required />
      <label>Image Code</label>
      <input v-model="img" type="text" required />
      <button>Add Product</button>
    </form>
  </div>
</template>

<script setup>
import { addDoc, collection } from "@firebase/firestore";
import { db, timestamp } from "@/firebase/config";

const title = ref("");
const desc = ref("");
const snippet = ref("");
const error = ref("");
const price = ref(0);
const img = ref("");

const handleSubmit = async () => {
  const post = {
    title: title.value,
    description: desc.value,
    snippet: snippet.value,
    price: price.value,
    img: img.value,
    createdAt: timestamp(),
  };

  try {
    const colRef = collection(db, "products");
    await addDoc(colRef, post);
  } catch (err) {
    error.value = err.message;
  }

  navigateTo({ path: "/products" });
};
</script>
