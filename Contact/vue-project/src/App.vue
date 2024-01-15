<template>
  <!-- <button @click="fetchData">Fetch data</button> -->
  <form v-on:submit.prevent="addContact">
    <p>Add contact</p>
    <p>Name: <input type="text" v-model="name"></p>
    <p>CodeName: <input type="text" v-model="codeName"></p>
    <p>Phone: <input type="text" v-model="phone"></p>
    <button type="submit">Add contact</button>
  </form>
  <br />
  <div v-for="contact in data" :key="contact.id">
    <div>{{ contact.id }}</div>
    <div>{{ contact.name }}</div>
    <div>{{ contact.codeName }}</div>
    <div>{{ contact.phone }}</div>
  </div>
</template>

<script>
  export default {
    async beforeMount() {
      const response = await fetch("http://localhost:8080/contact"); 
      this.data = await response.json();
    },
    data() {
      return {
        data: null,
        name: null,
        codeName: null,
        phone: null
      };
    },
    methods: {
      async addContact() {   
        const contact = {
          name: this.name,
          codeName: this.codeName,
          phone: this.phone,
        }
        // this.data.push(contact)
        this.name = null
        this.codeName = null
        this.phone = null    
        const response = await fetch("http://localhost:8080/contact", {
          "method": "POST", 
          "body": JSON.stringify(contact), 
          "headers": {"Content-Type": "application/json"}
        }); 
        this.data = await response.json();
      }   
    }
  };
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
