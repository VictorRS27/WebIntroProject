<template>
    <div class="posts">
      <div v-for="post in posts" :key="post.id" class="post">
        <h3>{{ post.title }}</h3>
        <div id="post_back">
            <p id="post_text">{{ post.text }}</p>
        </div>
        
        <p class="date">{{ formatDate(post.date) }}</p>
        <p><strong>Address:</strong> {{ post.address }}</p>
        <p><strong>Type:</strong> {{ post.type }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name : "Events",
    data() {
      return {
        posts: [
          {
            id: 1,
          title: 'Post 1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          date: '2023-05-26',
          address: '123 Main St, City, State',
          type: 'Conference'
        },
        {
          id: 2,
          title: 'Post 2',
          text: 'Pellentesque ac lectus fringilla, lacinia diam a, feugiat tortor.',
          date: '2023-05-27',
          address: '456 Elm St, City, State',
          type: 'Workshop'
        },
        {
          id: 3,
          title: 'Post 3',
          text: 'Maecenas tempor risus non mi ullamcorper finibus.',
          date: '2023-05-28',
          address: '789 Oak St, City, State',
          type: 'Seminar'
          }
        ]
      };
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
      }
    }
  };
  </script>
  
  <style scoped>
  .posts {
    margin: 15vw;
    display: flex;
    flex-direction: column;
  }
  
  .post {
    margin-bottom: 20px;
  }

  #post_back{
    background-color: lightgrey;
    height: 250px;
    width: 750px;
    border-radius: 30px;
  }

#post_text{
    padding: 20px;
}


  
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  
  .date {
    color: #888;
    font-size: 14px;
  }
  </style>
  