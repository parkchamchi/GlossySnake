<template>
  <div>
    <button style="max-width: 100px;" @click="showModal = true">로그인</button>

    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <form v-if="!isAccountMode" @submit.prevent="login" class="form-layout">
          <input v-model="email" type="email" placeholder="Email" />
          <input v-model="password" type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <button @click="isAccountMode = true" type="button">회원가입</button>
        </form>

        <form v-if="isAccountMode" @submit.prevent="createAccount" class="form-layout">
          <input v-model="email" type="email" placeholder="Email" />
          <input v-model="password" type="password" placeholder="Password" />
          <input v-model="repassword" type="password" placeholder="Confirm Password" />
          <button type="submit">회원가입</button>
          <button @click="isAccountMode = false" type="button">로그인으로 돌아가기</button>
        </form>

        <p v-if="errorMessage">{{ errorMessage }}</p>

        <button class="close-button" @click="closeModal">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginVue',
  data() {
    return {
      email: '',
      password: '',
      repassword: '',
      errorMessage: '',
      showModal: false,
      isAccountMode: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:56122/api/login', {
          email: this.email,
          password: this.password
        });

        const { key } = response.data;
        
        if (key) {
          console.log('Login successful! Key:', key);
          alert('Login successful! Key: ' + key);

          this.closeModal(); 
        } else {
          this.errorMessage = '로그인 실패: key가 반환되지 않았습니다.';
        }
      } catch (error) {
        if (error.response && error.response.data) {
          this.errorMessage = '로그인 실패: ' + error.response.data.message;
        } else {
          this.errorMessage = '로그인 실패: 서버와 연결할 수 없습니다.';
        }
      }
    },
    async createAccount() {
      if (this.password !== this.repassword) {
        this.errorMessage = '비밀번호가 일치하지 않습니다.';
        return;
      }

      try {
        const response = await axios.post('http://127.0.0.1:56122/rest-auth/login', {
          email: this.email,
          password: this.password
        });
        console.log(response.data);
        this.closeModal();
      } catch (error) {
        if (error.response && error.response.data) {
          this.errorMessage = '회원가입 실패: ' + error.response.data.message;
        } else {
          this.errorMessage = '회원가입 실패: 서버와 연결할 수 없습니다.';
        }
      }
    },
    closeModal() {
      this.showModal = false;
      this.isAccountMode = false;
      this.errorMessage = ''; 
    }
  }
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.form-layout {
  display: flex;
  flex-direction: column;
  gap: 10px; 
}

input, button {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
}

button {
  background-color: #febe98;
  color: black;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #ffb285;
}

p {
  margin-top: 10px;
  color: red;
}

/* 닫기 버튼도 동일한 레이아웃 적용 */
.close-button {
  margin-top: 10px; /* 입력 필드 및 버튼과 동일한 간격 */
}
</style>
