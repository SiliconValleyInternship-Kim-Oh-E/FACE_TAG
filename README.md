# 🏷️#FACE_TAG

_**#FACE_TAG** is a site that tags the characters in the video and lists the appearance times of the characters._

If you register the "Harry Potter" video on the website, you can check the video results of tagging Harry, Ron, and Hermione, the main cast of Harry Potter, and the time the person appeared.

_**#FACE_TAG**는 영상 속 인물들을 태깅하고 인물들의 등장 시간을 리스트로 정리해주는 사이트입니다._

'해리포터' 영상을 등록하면 해리포터의 주요 출연진인 'Harry', 'Ron', 'Hermione'을 태깅한 영상 결과와 해당 사람이 등장한 시간을 확인할 수 있습니다.

DEMO : https://youtu.be/bAEyQdHFb_w
<br/>
배포 : www.facenet.shop
<br/>
발표 자료 : https://drive.google.com/file/d/179TgZDUEb0vP0L2Ygpokr9drN3RBsGLN/view?usp=sharing

![upload1](https://user-images.githubusercontent.com/55133538/127518402-2c3b1b9e-eb6c-4a92-b6d5-9dd44cd704b1.gif)
![upload2](https://user-images.githubusercontent.com/55133538/127518418-4c0638ad-313f-4312-a514-2bb0b9335907.gif)
![timeline](https://user-images.githubusercontent.com/55133538/127518550-4a259859-e82e-4d5e-9827-a282eb3bcb01.gif)
<br/>
<br/>


## ✏ Features
    1) Printing Face Tag on Original Video
    2) Timestamp of Person Appearance
<br/>


## ✏ System Archetecture
![Untitled](https://user-images.githubusercontent.com/71761610/127014233-ab2ecc27-7d5e-463b-a24e-b9f2fc0d0dcd.png)
<br/>
<br/>




## ✏ Tech Stack
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frontend&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |      Backend      |         etc          |
| :----------------------: | :---------------: | :------------------: |
|     ![REACT](https://img.shields.io/badge/REACT-v17.0.2-blue?style=flat&logo=REACT)     |       ![Flask](https://img.shields.io/badge/Flask-v1.0.2-black?style=flat&logo=Flask)   ![Redis](https://img.shields.io/badge/Redis-v3.5.3-red?style=flat&logo=Redis)   ![Celery](https://img.shields.io/badge/Celery-v5.1.2-yellowgreen?style=flat&logo=Celery)   ![Python](https://img.shields.io/badge/Python-v3.7-yellow?style=flat&logo=Python)   ![PyTorch](https://img.shields.io/badge/PyTorch-v1.7.0-red?style=flat&logo=PyTorch)   ![OpenCV](https://img.shields.io/badge/OpenCV-v4.5.3-red?style=flat&logo=OpenCV)   ![YOLO](https://img.shields.io/badge/YOLO-v5-9cf?style=flat&logo=YOLOv5)   ![Gunicorn](https://img.shields.io/badge/Gunicorn-v.20.1.0-brightgreen?style=flat&logo=Gunicorn)     ![MySQL](https://img.shields.io/badge/MySQL-v8.0.26-blue?style=flat&logo=MySQL)     |     ![VScode](https://img.shields.io/badge/VScode-v3.5.3-blue?style=flat&logo=VScode)   ![Git](https://img.shields.io/badge/Git-orange?style=flat&logo=Git)   ![GitHub](https://img.shields.io/badge/GitHub-black?style=flat&logo=GitHub)     |

    - Frontend : React
    - Backend : Flask / Redis / Celery / Python / Pytorch / OpenCV
    - Middleware : Gunicorn
    - AI model : YOLO v5
    - Database : MySQL
    - etc : Nginx / VScode / Amazon S3 / Git&GitHub
<br/>



## ✏ Initialization
- clone the Repository
```
$ git clone https://github.com/SiliconValleyInternship-KimChOI/Docker.git
```
<br/>

- Install npm packages & Start React
```
$ cd frontend
$ npm i
$ npm start
```
<br/>

- Start Flask
```
$ cd backend
$ flask run
```
<br/>

- Start Redis   <br/>
Download Redis https://redis.io/download   <br/>
Start redis-server.exe <br/>
<br/>

- Start Celery
```
$ cd backend

Windows
$ celery -A tasks worker --pool=solo -l info
Mac
$ celery -A tasks worker --loglevel=info 
```
<br/>

## ✏ Team Members
Our Team Name : **Kim ChOI** <- Our last name is *Kim + Ch(oi) + O(=Oh) + I(=Lee)*

😎SeoYeong Kim (leader) - https://github.com/ksy990628

🎅MinJeong Kim - https://github.com/kimminje0ng

🧑HongGi Oh - https://github.com/ohhondgi

👨‍💻DongHeon Lee - https://github.com/Dongheon97

🙎‍♀️SeungMi Lee - https://github.com/minewet

👱‍♀️Seyeon Choi - https://github.com/barabobBOB
