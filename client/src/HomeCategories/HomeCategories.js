import React, { Component } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory'

class HomeCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [
        {"url" : "6", "categorias": "Alimento para bebés", "svg": <svg className="category-img" xmlns="http://www.w3.org/2000/svg" id="Layer" viewBox="0 0 550 550" width="512" height="512"> <path d="M344.177,176.355H55.458c0.805-5.311,2.906-10.412,6.137-14.721l32.064-42.752c6.137-8.182,9.516-18.32,9.516-28.548 V79.129h160.838c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H95.677c-4.705,0-8.532-3.828-8.532-8.532V23.532 c0-4.705,3.828-8.532,8.532-8.532h224.452c4.705,0,8.532,3.828,8.532,8.532v32.064c0,4.705-3.828,8.532-8.532,8.532h-24.047 c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h16.547v11.205c0,10.227,3.379,20.366,9.516,28.548l16.032,21.376 c1.474,1.965,3.726,3,6.006,3c1.566,0,3.145-0.489,4.494-1.5c3.313-2.485,3.985-7.186,1.5-10.5l-16.032-21.376 c-4.202-5.603-6.516-12.545-6.516-19.548V77.896c9.308-3.139,16.032-11.946,16.032-22.3V23.532 C343.661,10.557,333.104,0,320.129,0H95.677C82.702,0,72.145,10.557,72.145,23.532v32.064c0,10.354,6.724,19.16,16.032,22.3 v12.437c0,7.003-2.314,13.946-6.516,19.548l-32.064,42.752c-6.137,8.183-9.516,18.321-9.516,28.548v291.253 c0,21.816,17.749,39.564,39.564,39.564h248.5c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.498-7.5-7.498h-248.5 c-13.545,0-24.564-11.02-24.564-24.564v-8.532h249.016c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H55.081V191.355 h289.097c4.142,0,7.5-3.358,7.5-7.5C351.677,179.713,348.32,176.355,344.177,176.355z" fill="#0d98ba" /> <path d="M433.667,331.583c-4.218-2.955-6.698-8.233-6.472-13.774l11.291-276.623c0.866-21.195-14.374-39.217-34.693-41.029 c-11.039-0.985-21.934,2.808-29.905,10.405c-7.978,7.603-12.296,18.276-11.847,29.282l11.345,277.965 c0.226,5.541-2.254,10.819-6.472,13.774c-23.595,16.529-38.252,49-38.252,84.74c0,25.125,7.18,48.835,20.218,66.762 C362.44,501.731,380.698,512,400.291,512c19.593,0,37.851-10.269,51.412-28.916c13.037-17.926,20.217-41.636,20.217-66.762 C471.919,380.583,457.262,348.112,433.667,331.583z M384.234,21.421c4.39-4.184,10.016-6.422,16.033-6.422 c0.725,0,1.457,0.033,2.192,0.098c12.13,1.082,21.568,12.511,21.039,25.477l-7.505,183.878h-31.406l-7.56-185.22 C376.754,32.538,379.381,26.046,384.234,21.421z M400.291,497c-31.226,0-56.629-36.192-56.629-80.677 c0-30.925,12.208-58.688,31.858-72.455c8.487-5.945,13.292-15.916,12.853-26.67l-3.173-77.746h30.182l-3.173,77.745 c-0.439,10.755,4.366,20.726,12.853,26.671c19.651,13.767,31.858,41.53,31.858,72.455C456.919,460.808,431.516,497,400.291,497z" fill="#0d98ba" /> <path d="M207.903,216.436c-57.177,0-103.694,46.516-103.694,103.693s46.517,103.694,103.694,103.694 s103.693-46.517,103.693-103.694S265.08,216.436,207.903,216.436z M207.904,408.823c-48.905,0-88.694-39.788-88.694-88.694 c0-38.625,24.821-71.557,59.349-83.698c-1.416,3.58-2.203,7.475-2.203,11.553c0,17.396,14.152,31.548,31.548,31.548 c8.962,0,17.532-3.832,23.512-10.513c2.763-3.086,2.5-7.828-0.586-10.59c-3.084-2.762-7.827-2.5-10.59,0.586 c-3.138,3.506-7.634,5.517-12.335,5.517c-9.125,0-16.548-7.423-16.548-16.548s7.423-16.548,16.548-16.548 c48.904,0,88.692,39.787,88.692,88.693S256.809,408.823,207.904,408.823z" fill="#0d98ba" /> <path d="M239.968,328.661h-64.129c-4.142,0-7.5,3.358-7.5,7.5v8.016c0,21.816,17.749,39.564,39.564,39.564 s39.564-17.749,39.564-39.564v-8.016C247.468,332.019,244.109,328.661,239.968,328.661z M232.469,344.177L232.469,344.177 c-0.001,13.545-11.021,24.564-24.565,24.564c-13.544,0-24.564-11.02-24.564-24.564v-0.516h49.129V344.177z" fill="#0d98ba" /> <path d="M190.069,299.896c-4.789-7.086-13.105-11.316-22.246-11.316c-9.142,0-17.458,4.23-22.247,11.317 c-2.319,3.432-1.417,8.094,2.015,10.414c1.288,0.87,2.748,1.287,4.192,1.287c2.407,0,4.772-1.157,6.221-3.302 c1.965-2.909,5.727-4.715,9.818-4.715c4.091,0,7.853,1.807,9.819,4.715c2.319,3.432,6.981,4.334,10.414,2.014 C191.487,307.991,192.388,303.329,190.069,299.896z" fill="#0d98ba" /> <path d="M278.247,299.897c-4.789-7.086-13.105-11.317-22.247-11.317c-9.142,0-17.458,4.23-22.247,11.317 c-2.318,3.433-1.417,8.095,2.016,10.414c3.433,2.318,8.094,1.417,10.414-2.015c1.965-2.909,5.727-4.715,9.818-4.715 s7.853,1.807,9.818,4.715c1.449,2.145,3.813,3.302,6.221,3.302c1.444,0,2.905-0.417,4.192-1.287 C279.664,307.992,280.566,303.33,278.247,299.897z" fill="#0d98ba" /></svg>}, 
        {"url" : "43", "categorias": "Panificados", "svg": <svg className="category-img" xmlns="http://www.w3.org/2000/svg" id="Layer" viewBox="0 0 550 550" width="512" height="512"> <path d="M447.034,225.165c-3.016-10.19-12.391-17.169-23.017-17.137v-8c0.03-34.003-8.664-67.444-25.248-97.128l12.448-27.416 c12.199-26.831,0.337-58.472-26.495-70.671c-6.935-3.153-14.464-4.785-22.081-4.785h-3.056 c-17.275,0.064-33.456,8.47-43.44,22.568C269.75-1.568,215.721-6.549,165.689,8.724c-8.866-5.653-19.157-8.669-29.672-8.696 c-30.913,0.035-55.965,25.087-56,56v5.416c-35.941,37.179-56.022,86.873-56,138.584v8C10.802,207.979,0.049,218.652,0,231.867 c-0.04,10.633,6.942,20.016,17.137,23.033l23.84,131.144c4.841,26.628,28.032,45.984,55.096,45.984h55.944v-16H96.073 c-19.316,0.003-35.875-13.799-39.352-32.8l-23.104-127.2h380.8l-8.472,46.568l15.744,2.864l9.192-50.56 C443.553,251.15,450.785,237.837,447.034,225.165z M359.585,16.028h3.056c20.633-0.002,37.362,16.723,37.364,37.356 c0,5.327-1.138,10.593-3.34,15.444l-8.056,17.76c-3.2-4.64-6.584-9.168-10.168-13.512l2.92-0.896l-4.688-15.304l-10.064,3.088 c-10.986-11.174-23.237-21.03-36.504-29.368C337.158,21.452,348.037,16.076,359.585,16.028z M136.017,16.028 c2.616,0.027,5.223,0.311,7.784,0.848c-16.558,7.275-32.054,16.762-46.064,28.2C102.588,27.938,118.206,16.087,136.017,16.028z M224.017,16.028c101.573,0.115,183.885,82.427,184,184v8h-16v-8c0.018-92.753-75.158-167.959-167.911-167.977 C148.453,32.037,82.128,82.607,62.113,155.565c-13.907,10.556-22.081,27.005-22.096,44.464 C40.132,98.456,122.444,16.143,224.017,16.028z M320.249,168.365l-12.736,3.84c-3.338-19.473-9.389-38.383-17.976-56.176 l19.376-41.992c15.571,10.564,29.065,23.904,39.808,39.352l-37.552,11.52l4.696,15.304l41.6-12.8 c2.368,4.336,4.528,8.792,6.48,13.368l-30.536,67.248h-21.816c-0.352-6.76-0.904-13.384-1.68-19.832l14.952-4.504L320.249,168.365 z M82.065,145.86c16.113-42.665,50.644-75.763,93.952-90.056c0,0.072,0,0.152,0,0.224v32.984 c-4.944,5.784-9.334,12.019-13.112,18.624l-7.888-9.856l-40,32l10,12.496l33.944-27.16c-8.152,16.565-14.047,34.149-17.528,52.28 C128.063,148.55,104.409,139.97,82.065,145.86z M136.017,200.029v8h-80v-8c0.026-22.08,17.92-39.974,40-40 C118.098,160.055,135.991,177.948,136.017,200.029z M224.017,80.028c36.248,0,67.552,56.696,71.656,128H152.361 C156.465,136.724,187.769,80.028,224.017,80.028z M191.649,51.596c10.632-2.334,21.483-3.53,32.368-3.568 c24.791-0.011,49.203,6.083,71.08,17.744l-15.384,33.344c-15.088-22.056-34.392-35.088-55.696-35.088 c-11.496,0.163-22.665,3.849-32,10.56v-18.56C192.017,54.541,191.769,53.076,191.649,51.596z M371.329,163.229 c1.762,6.835,3.043,13.786,3.832,20.8h-7.144v16h8v8h-25.032L371.329,163.229z M424.017,240.029h-400c-4.418,0-8-3.582-8-8 s3.582-8,8-8h400c4.418,0,8,3.582,8,8S428.436,240.029,424.017,240.029z" fill="#0d98ba" /> <path d="M260.697,121.54c-2.084-1.503-4.762-1.913-7.2-1.104l-41.6,13.88c-21.427,7.102-35.888,27.139-35.88,49.712 c0,4.418,3.582,8,8,8c0.859-0.001,1.712-0.138,2.528-0.408l41.64-13.88c21.408-7.119,35.847-27.152,35.832-49.712 C264.017,125.458,262.782,123.044,260.697,121.54z M223.129,162.557l-0.032,0l-29.176,9.728 c3.665-10.767,12.158-19.198,22.952-22.784l29.176-9.728C242.391,150.532,233.911,158.962,223.129,162.557z" fill="#0d98ba" /> <rect x="320.017" y="280.029" width="48" height="16" fill="#0d98ba" /> <rect x="240.017" y="280.029" width="48" height="16" fill="#0d98ba" /> <rect x="160.017" y="280.029" width="48" height="16" fill="#0d98ba" /> <rect x="80.017" y="280.029" width="48" height="16" fill="#0d98ba" /> <rect x="80.017" y="328.029" width="48" height="16" fill="#0d98ba" /> <rect x="80.017" y="376.029" width="48" height="16" fill="#0d98ba" /> <rect x="72.017" y="176.029" width="16" height="16" fill="#0d98ba" /> <rect x="104.017" y="184.029" width="16" height="16" fill="#0d98ba" /> <path d="M479.041,344.06c-3.64-14.156-16.408-24.046-31.024-24.032h-272c-17.673-0.018-32.014,14.295-32.032,31.968 c-0.014,14.616,9.876,27.384,24.032,31.024v73.008c0,13.255,10.745,24,24,24h240c13.255,0,24-10.745,24-24v-73.008 C473.134,378.62,483.442,361.177,479.041,344.06z M296.017,376.029v80c0,4.418-3.582,8-8,8h-96c-4.418,0-8-3.582-8-8v-80 c0-4.418-3.582-8-8-8c-8.837,0-16-7.163-16-16s7.163-16,16-16h128c8.837,0,16,7.163,16,16s-7.163,16-16,16 C299.599,368.029,296.017,371.61,296.017,376.029z M448.017,368.029c-4.418,0-8,3.582-8,8v80c0,4.418-3.582,8-8,8H310.545 c0.948-2.562,1.445-5.268,1.472-8v-73.008c14.117-3.671,23.978-16.406,24-30.992c-0.033-5.634-1.569-11.157-4.448-16h116.448 c8.837,0,16,7.163,16,16S456.854,368.029,448.017,368.029z" fill="#0d98ba" /> <rect x="400.017" y="352.029" width="16" height="16" fill="#0d98ba" /> <rect x="360.017" y="376.029" width="16" height="16" fill="#0d98ba" /> <rect x="408.017" y="416.029" width="16" height="16" fill="#0d98ba" /> <rect x="328.017" y="432.029" width="16" height="16" fill="#0d98ba" /></svg>},
        {"url" : "13", "categorias": "Bebidas", "svg": <svg className="category-img" xmlns="http://www.w3.org/2000/svg" id="Layer" viewBox="0 0 550 550" width="512" height="512"> <path d="M367.859,339.663c0-11.391-5.325-21.54-13.68-28.055c8.354-6.515,13.774-16.664,13.774-28.055 c0-11.993-6.207-22.611-15.328-29.058c9.183-7.254,14.858-18.476,14.858-31.06V148.74l-71.909-93.632h15.8V0H200.156v55.108 h16.801l-72.91,93.632v74.697c0,12.584,6.161,23.805,15.344,31.06c-9.121,6.447-14.968,17.064-14.968,29.058 c0,11.391,5.451,21.54,13.805,28.055c-8.354,6.515-13.711,16.664-13.711,28.055c0,11.993,5.737,22.611,14.858,29.058 c-9.183,7.254-15.328,18.476-15.328,31.06v64.125c0,21.823,18.256,40.078,40.078,40.078h40.078v-0.659 c6.671,5.12,15.007,8.675,24.047,8.675h16.031c9.04,0,17.376-3.554,24.047-8.675v0.659h40.078 c21.823,0,39.076-18.256,39.076-40.078v-64.125c0-12.584-5.66-23.805-14.843-31.06 C361.761,362.275,367.859,351.657,367.859,339.663z M215.186,40.078V15.029h81.159v25.049H215.186z M235.919,55.108h40.692 l68.596,89.174H167.323L235.919,55.108z M332.415,319.624c11.326,0,20.54,9.214,20.54,20.54s-9.214,20.54-20.54,20.54h-20.039 v15.029h16.031c13.536,0,24.047,10.511,24.047,24.047v64.125c0,13.536-10.51,25.049-24.047,25.049h-28.18 c2.325-6.012,3.632-11.134,3.632-17.033H288.83c0,13.536-11.012,25.049-24.548,25.049H248.25 c-13.535,0-24.548-11.512-24.548-25.049h-15.029c0,5.9,1.307,11.022,3.632,17.033h-28.18c-13.535,0-25.049-11.512-25.049-25.049 v-64.125c0-13.536,11.513-24.047,25.049-24.047h80.157v-15.029h-84.164c-11.326,0-20.54-9.214-20.54-20.54 s9.214-20.54,20.54-20.54h84.164v-15.029h-84.164c-11.326,0-20.54-9.214-20.54-20.54s9.214-20.54,20.54-20.54h84.164v-15.029 h-80.157c-13.535,0-25.049-11.512-25.049-25.049v-64.125h193.378v64.125c0,13.536-10.51,25.049-24.047,25.049h-16.031v15.029 h20.039c11.326,0,20.54,9.214,20.54,20.54s-9.214,20.54-20.54,20.54h-20.039v15.029H332.415z" fill="#0d98ba" /> <rect x="200.16" y="112.219" width="16.031" height="15.029" fill="#0d98ba" /> <rect x="216.192" y="96.188" width="16.031" height="15.029" fill="#0d98ba" /> <rect x="280.317" y="304.595" width="16.031" height="15.029" fill="#0d98ba" /> <rect x="280.317" y="248.485" width="16.031" height="15.029" fill="#0d98ba" /> <rect x="280.317" y="360.704" width="16.031" height="15.029" fill="#0d98ba" /></svg>}, 
        {"url" : "44", "categorias": "Pastas", "svg":  <svg className="category-img" xmlns="http://www.w3.org/2000/svg" id="Capa_2" viewBox="0 0 60 60" width="512" height="512"> <g fill="#0d98ba"> <path d="M35.869,37.869c0.552,0,1-0.447,1-1c0-3.859-3.14-7-7-7c-0.552,0-1,0.447-1,1s0.448,1,1,1c2.757,0,5,2.243,5,5 C34.869,37.421,35.316,37.869,35.869,37.869z" /> <path d="M38.869,37.869c0.552,0,1-0.447,1-1c0-5.514-4.486-10-10-10c-2.206,0-4,1.794-4,4c0,0.553,0.448,1,1,1s1-0.447,1-1 c0-1.103,0.897-2,2-2c4.411,0,8,3.589,8,8C37.869,37.421,38.316,37.869,38.869,37.869z" /> <path d="M29.869,32.869c-0.552,0-1,0.447-1,1s0.448,1,1,1c1.103,0,2,0.897,2,2c0,0.553,0.448,1,1,1s1-0.447,1-1 C33.869,34.663,32.074,32.869,29.869,32.869z" /> <path d="M41.869,37.869c0.552,0,1-0.447,1-1c0-7.168-5.832-13-13-13h-2c-2.757,0-5,2.243-5,5c0,0.553,0.448,1,1,1s1-0.447,1-1 c0-1.654,1.346-3,3-3h2c6.065,0,11,4.935,11,11C40.869,37.421,41.316,37.869,41.869,37.869z" /> <path d="M15.869,14.869c0.552,0,1-0.447,1-1h5c1.627,0,3.061-0.793,3.974-2h28.026c1.654,0,3-1.346,3-3s-1.346-3-3-3H25.843 c-0.914-1.207-2.348-2-3.974-2h-5c0-0.553-0.448-1-1-1s-1,0.447-1,1v10C14.869,14.421,15.316,14.869,15.869,14.869z M53.869,7.869 c0.551,0,1,0.448,1,1s-0.449,1-1,1H26.768c0.066-0.323,0.101-0.658,0.101-1s-0.035-0.677-0.101-1H53.869z M21.869,5.869 c1.004,0,1.89,0.5,2.434,1.26l0.143,0.245c0.134,0.229,0.233,0.465,0.303,0.704c0.005,0.017,0.012,0.034,0.016,0.052 c0.067,0.243,0.103,0.49,0.103,0.739s-0.036,0.496-0.103,0.739c-0.005,0.018-0.011,0.034-0.016,0.052 c-0.07,0.239-0.169,0.475-0.303,0.704l-0.143,0.245c-0.545,0.76-1.43,1.26-2.434,1.26h-5V9.871c0.726,0.001,1.948,0.002,4,0.002 c0.552,0,1-0.447,1-1s-0.448-1-1-1c-2.056,0-3.277-0.001-4-0.002V5.869H21.869z" /> <path d="M12.869,14.869c0.552,0,1-0.447,1-1v-10c0-0.553-0.448-1-1-1s-1,0.447-1,1v10C11.869,14.421,12.316,14.869,12.869,14.869z" /> <path d="M12.869,27.869c0.552,0,1-0.447,1-1v-10c0-0.553-0.448-1-1-1s-1,0.447-1,1v10C11.869,27.421,12.316,27.869,12.869,27.869z" /> <path d="M9.869,16.869c-0.552,0-1,0.447-1,1v10c0,0.553,0.448,1,1,1s1-0.447,1-1v-10C10.869,17.316,10.421,16.869,9.869,16.869z" /> <path d="M4.869,10.869c-0.552,0-1,0.447-1,1s0.448,1,1,1h4v2.289c0,0.553,0.448,1,1,1s1-0.447,1-1V3.869c0-0.553-0.448-1-1-1 s-1,0.447-1,1v1h-4c-0.552,0-1,0.447-1,1s0.448,1,1,1h4v1h-4c-0.552,0-1,0.447-1,1s0.448,1,1,1h4v1H4.869z" /> <path d="M50.818,48.869c-0.508-5.598-5.221-10-10.949-10h-7c-0.552,0-1,0.447-1,1s0.448,1,1,1h7c4.624,0,8.442,3.507,8.941,8h-1.01 c-0.495-3.94-3.859-7-7.931-7h-6c-0.552,0-1,0.447-1,1s0.448,1,1,1h6c2.967,0,5.431,2.167,5.91,5h-1.011 c-0.465-2.279-2.484-4-4.899-4h-5c-0.552,0-1,0.447-1,1s0.448,1,1,1h5c1.302,0,2.402,0.839,2.816,2h-1.816c0-0.553-0.448-1-1-1h-5 c-0.552,0-1,0.447-1,1h-1.017c-0.351-14.717-8.418-20-15.983-20h-1c-5.514,0-10,4.486-10,10v5c0,0.553,0.448,1,1,1s1-0.447,1-1v-5 c0-4.411,3.589-8,8-8h1c9.949,0,13.725,9.116,13.985,18h-0.999c-0.28-10.669-5.09-17-12.987-17c-3.86,0-7,3.141-7,7v1 c0,0.553,0.448,1,1,1s1-0.447,1-1v-1c0-2.757,2.243-5,5-5c9.292,0,10.826,9.8,10.984,15h-0.998c-0.287-11.536-5.55-14-9.986-14 c-1.654,0-3,1.346-3,3c0,0.553,0.448,1,1,1s1-0.447,1-1c0-0.552,0.449-1,1-1c5.171,0,7.782,3.936,7.981,12h-0.981 c0-0.553-0.448-1-1-1h-5c-0.552,0-1,0.447-1,1h-1.816c0.414-1.161,1.514-2,2.816-2h5c0.552,0,1-0.447,1-1s-0.448-1-1-1h-5 c-2.414,0-4.434,1.721-4.899,4h-1.011c0.478-2.833,2.942-5,5.91-5h4c0.552,0,1-0.447,1-1s-0.448-1-1-1h-4 c-4.072,0-7.436,3.06-7.931,7h-1.01c0.5-4.493,4.317-8,8.941-8h2c0.552,0,1-0.447,1-1s-0.448-1-1-1h-2 c-5.728,0-10.442,4.402-10.949,10H0l3.045,4.567c1.433,2.149,3.831,3.433,6.415,3.433h40.818c2.583,0,4.981-1.283,6.415-3.433 l3.045-4.567H50.818z M55.028,52.327c-1.061,1.592-2.837,2.542-4.75,2.542H9.459c-1.914,0-3.689-0.95-4.75-2.542l-0.972-1.458 h24.131h5H56L55.028,52.327z" /> </g> </svg>}, 
        {"url" : "16", "categorias": "Café", "svg": <svg className="category-img" xmlns="http://www.w3.org/2000/svg" id="Layer" viewBox="0 0 550 550" width="512" height="512"> <path d="M502,206.5h-82v-21.167c0-5.523-4.478-10-10-10H194c-5.522,0-10,4.477-10,10c0,5.523,4.478,10,10,10h206v76.666 c0,67.348-35.957,129.942-94.018,164H114.018C55.957,401.942,20,339.347,20,272v-76.666h67c5.522,0,10-4.477,10-10 c0-5.523-4.478-10-10-10H10c-5.522,0-10,4.477-10,10V272c0,37.8,10.16,74.864,29.382,107.183 C42.345,400.98,59.165,420.228,78.862,436H10c-5.522,0-10,4.477-10,10c0,36.393,29.607,66,66,66h312c36.393,0,66-29.607,66-66 c0-5.523-4.478-10-10-10h-92.862c18.129-14.516,33.812-31.983,46.302-51.667h28.227C468.785,384.333,512,341.118,512,288v-71.5 C512,210.977,507.523,206.5,502,206.5z M422.905,456c-4.578,20.572-22.974,36-44.905,36H66c-21.931,0-40.326-15.428-44.905-36 h90.244h197.322H422.905z M420,272v-5.5h32V288c0,20.034-16.299,36.333-36.333,36.333h-2.271C417.761,307.327,420,289.745,420,272 z M492,288c0,42.09-34.243,76.333-76.333,76.333h-17.02c3.193-6.521,6.045-13.197,8.537-20h8.483 C446.73,344.333,472,319.062,472,288v-31.5c0-5.523-4.478-10-10-10h-42v-20h72V288z" fill="#0d98ba" /> <path d="M219.549,55.343l-5.203-6.533c-7.638-9.588-7.649-22.991-0.027-32.593c3.434-4.326,2.71-10.616-1.616-14.049 c-4.327-3.435-10.616-2.71-14.05,1.616c-13.442,16.936-13.422,40.575,0.049,57.487l5.203,6.533 c9.981,12.53,9.996,30.045,0.036,42.594l-5.332,6.718c-3.434,4.326-2.71,10.616,1.616,14.049c1.839,1.459,4.032,2.168,6.21,2.168 c2.946,0,5.865-1.296,7.84-3.784l5.332-6.718C235.387,102.949,235.364,75.197,219.549,55.343z" fill="#0d98ba" /> <path d="M274.978,77.827l-5.203-6.532c-7.638-9.589-7.649-22.992-0.027-32.594c3.434-4.326,2.71-10.616-1.616-14.049 c-4.327-3.435-10.616-2.71-14.05,1.616c-13.442,16.936-13.422,40.575,0.049,57.488l5.203,6.533 c9.98,12.531,9.995,30.047,0.035,42.595l-5.331,6.717c-3.434,4.326-2.71,10.616,1.616,14.049c1.839,1.459,4.032,2.167,6.21,2.167 c2.946,0,5.866-1.297,7.84-3.784l5.33-6.717C290.815,125.435,290.792,97.683,274.978,77.827z" fill="#0d98ba" /> <path d="M164.12,77.828l-5.203-6.532c-7.638-9.588-7.649-22.992-0.028-32.594c3.434-4.326,2.71-10.616-1.616-14.05 c-4.327-3.434-10.616-2.708-14.05,1.616c-13.441,16.936-13.421,40.576,0.05,57.488l5.203,6.533 c9.98,12.531,9.995,30.047,0.036,42.594l-5.332,6.717c-3.434,4.326-2.711,10.616,1.615,14.05c1.839,1.459,4.031,2.168,6.21,2.168 c2.946,0,5.865-1.296,7.839-3.783l5.333-6.718C179.957,125.436,179.934,97.684,164.12,77.828z" fill="#0d98ba" /> <path d="M150.28,178.26c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93c-1.859,1.87-2.93,4.44-2.93,7.07 s1.07,5.21,2.93,7.08c1.86,1.86,4.44,2.92,7.07,2.92s5.21-1.06,7.07-2.92c1.869-1.87,2.93-4.44,2.93-7.08 C153.21,182.7,152.149,180.12,150.28,178.26z" fill="#0d98ba" /> <path d="M362,262c-5.522,0-10,4.477-10,10c0,37.119-15.056,73.598-41.308,100.083c-3.888,3.922-3.859,10.254,0.063,14.142 c1.95,1.933,4.495,2.898,7.04,2.898c2.574-0.001,5.148-0.989,7.103-2.962C354.832,355.961,372,314.351,372,272 C372,266.477,367.522,262,362,262z" fill="#0d98ba" /> <path d="M293.885,399.225c-2.714-4.811-8.813-6.51-13.623-3.797l-0.228,0.129c-4.811,2.714-6.51,8.813-3.797,13.623 c1.838,3.258,5.227,5.089,8.719,5.089c1.664,0,3.352-0.417,4.904-1.292l0.228-0.129 C294.899,410.134,296.598,404.035,293.885,399.225z" fill="#0d98ba" /></svg>}, 
        {"url" : "52", "categorias": "Snacks", "svg": <svg className="category-img" xmlns="http://www.w3.org/2000/svg" id="Layer" viewBox="0 0 550 550" width="512" height="512"> <rect x="52.676" y="427.232" width="16" height="16" fill="#0d98ba" /> <rect x="84.676" y="427.232" width="16" height="16" fill="#0d98ba" /> <rect x="116.676" y="427.232" width="16" height="16" fill="#0d98ba" /> <rect x="148.676" y="427.232" width="16" height="16" fill="#0d98ba" /> <rect x="180.676" y="427.232" width="16" height="16" fill="#0d98ba" /> <rect x="52.676" y="60.496" width="16" height="16" fill="#0d98ba" /> <rect x="84.676" y="60.496" width="16" height="16" fill="#0d98ba" /> <rect x="116.676" y="60.496" width="16" height="16" fill="#0d98ba" /> <rect x="148.676" y="59.872" width="16" height="16" fill="#0d98ba" /> <rect x="180.676" y="59.232" width="16" height="16" fill="#0d98ba" /> <rect x="212.676" y="60.496" width="16" height="16" fill="#0d98ba" /> <rect x="244.676" y="60.496" width="16" height="16" fill="#0d98ba" /> <rect x="276.676" y="60.496" width="16" height="16" fill="#0d98ba" /> <rect x="308.676" y="59.872" width="16" height="16" fill="#0d98ba" /> <rect x="212.676" y="427.232" width="16" height="16" fill="#0d98ba" /> <rect x="244.676" y="427.232" width="16" height="16" fill="#0d98ba" /> <path d="M347.7,367.384c-3.768-6.92-7.024-12.888-7.024-25.512c0-12.616,3.256-18.584,7.024-25.496 c2.68-4.912,5.72-10.488,7.472-18.328l-15.608-3.488c-1.264,5.64-3.416,9.584-5.904,14.152c-4.208,7.712-8.984,16.456-8.984,33.16 c0,16.704,4.768,25.456,8.976,33.168c3.768,6.912,7.024,12.88,7.024,25.512s-3.256,18.6-7.024,25.504 c-1.4,2.56-2.784,5.128-4.032,7.952l14.624,6.472c1.072-2.408,2.264-4.576,3.456-6.76c4.208-7.712,8.976-16.456,8.976-33.168 C356.676,383.84,351.908,375.088,347.7,367.384z" fill="#0d98ba" /> <path d="M388.676,341.872c0-12.616,3.256-18.584,7.024-25.488c4.208-7.712,8.976-16.448,8.976-33.152h-16 c0,12.616-3.256,18.584-7.024,25.488c-4.208,7.712-8.976,16.448-8.976,33.152c0,16.704,4.768,25.456,8.976,33.168 c3.768,6.912,7.024,12.88,7.024,25.512c0,12.624-3.256,18.592-7.024,25.504c-4.208,7.712-8.976,16.464-8.976,33.176h16 c0-12.632,3.256-18.6,7.024-25.512c4.208-7.712,8.976-16.464,8.976-33.168c0-16.712-4.768-25.464-8.976-33.168 C391.932,360.464,388.676,354.496,388.676,341.872z" fill="#0d98ba" /> <path d="M443.7,367.384c-2.464-4.512-4.584-8.408-5.856-13.936l-15.592,3.56c1.76,7.688,4.76,13.176,7.4,18.032 c3.768,6.92,7.024,12.888,7.024,25.512c0,12.632-3.256,18.6-7.024,25.504c-3.344,6.136-7.136,13.08-8.472,24.216l15.888,1.904 c0.968-8.088,3.584-12.896,6.624-18.464c4.216-7.704,8.984-16.448,8.984-33.16C452.676,383.84,447.908,375.096,443.7,367.384z" fill="#0d98ba" /> <path d="M432.276,303.728c-0.84,1.736-1.744,3.368-2.632,5.008c-1.928,3.536-3.928,7.192-5.576,11.792l15.064,5.408 c1.224-3.424,2.84-6.392,4.56-9.536c1.008-1.848,2.016-3.712,2.976-5.672L432.276,303.728z" fill="#0d98ba" /> <path d="M388.676,243.232c-11.12,0-21.848,1.68-32,4.72v-88.128c0-39.736,3.6-79.696,10.704-118.776L374.852,0l-12.368,3.528 c-36.448,10.424-74.144,15.704-112.048,15.704h-123.52c-37.904,0-75.6-5.28-112.048-15.696L2.508,0.008L9.98,41.056 c7.096,39.072,10.696,79.032,10.696,118.768v185.648c0,48.352-5.32,96.808-15.816,144.024l-2.912,13.12l12.92-3.688 c36.44-10.416,74.136-15.696,112.048-15.696h123.52c37.912,0,75.608,5.28,112.048,15.696l12.928,3.696l-0.968-4.4 c4.672,0.6,9.4,1.008,14.232,1.008c61.76,0,112-50.24,112-112v-32C500.676,293.472,450.436,243.232,388.676,243.232z M250.436,467.232h-123.52c-35,0-69.832,4.328-103.712,12.88c5.128-25.376,8.632-51.08,10.832-76.88h210.64v-16H35.236 c0.856-13.912,1.44-27.832,1.44-41.76V159.824c0-14.856-0.664-29.728-1.64-44.592h17.64v-16h-18.72 c-1.832-20.48-4.576-40.872-8.248-61.04l-2.896-15.944c34.016,8.616,68.976,12.984,104.104,12.984h123.52 c35.136,0,70.096-4.368,104.112-12.984l-2.904,15.944c-3.672,20.168-6.416,40.56-8.248,61.04H68.676v16h273.64 c-0.976,14.864-1.64,29.736-1.64,44.592v94.368c-37.776,18.024-64,56.472-64,101.04v32h-16v16h17.28 c1.2,8.336,3.296,16.36,6.232,24h-7.512v16h15.152c6.424,11.064,14.64,20.936,24.32,29.184 C294.436,469.008,272.476,467.232,250.436,467.232z M484.676,387.232c0,52.936-43.064,96-96,96c-52.936,0-96-43.064-96-96v-32 c0-52.936,43.064-96,96-96c52.936,0,96,43.064,96,96V387.232z" fill="#0d98ba" /> <path d="M188.676,147.232c-57.344,0-104,46.656-104,104s46.656,104,104,104s104-46.656,104-104S246.02,147.232,188.676,147.232z M188.676,339.232c-48.52,0-88-39.48-88-88c0-48.52,39.48-88,88-88s88,39.48,88,88S237.196,339.232,188.676,339.232z" fill="#0d98ba" /></svg>}, 
        {"url" : "33", "categorias": "Galletas", "svg": <svg className="category-img" xmlns="http://www.w3.org/2000/svg" id="Layer" viewBox="0 0 550 550" width="512" height="512"> <path d="M336,248c-13.232,0-24,10.768-24,24s10.768,24,24,24s24-10.768,24-24S349.232,248,336,248z M336,280c-4.416,0-8-3.592-8-8 c0-4.408,3.584-8,8-8c4.416,0,8,3.592,8,8C344,276.408,340.416,280,336,280z" fill="#0d98ba" /> <path d="M416,136c-13.232,0-24,10.768-24,24s10.768,24,24,24s24-10.768,24-24S429.232,136,416,136z M416,168c-4.416,0-8-3.592-8-8 s3.584-8,8-8c4.416,0,8,3.592,8,8S420.416,168,416,168z" fill="#0d98ba" /> <path d="M496,344c0-13.232-10.768-24-24-24h-42.168C469.24,298.152,496,256.16,496,208c0-70.576-57.424-128-128-128 c-49.576,0-92.56,28.384-113.816,69.696c-0.68-1.968-1.496-3.888-2.552-5.696c2.848-4.856,4.368-10.36,4.368-16 s-1.52-11.144-4.368-16c2.848-4.856,4.368-10.36,4.368-16s-1.52-11.144-4.368-16C254.48,75.144,256,69.64,256,64 s-1.52-11.144-4.368-16C254.48,43.144,256,37.64,256,32c0-17.648-14.352-32-32-32c-5.64,0-11.152,1.52-16,4.36 c-9.704-5.68-22.296-5.68-32,0c-9.704-5.68-22.296-5.68-32,0c-9.704-5.68-22.296-5.68-32,0C107.152,1.52,101.64,0,96,0 C78.352,0,64,14.352,64,32c0,5.64,1.52,11.144,4.368,16C65.52,52.856,64,58.36,64,64s1.52,11.144,4.368,16 C65.52,84.856,64,90.36,64,96s1.52,11.144,4.368,16C65.52,116.856,64,122.36,64,128s1.52,11.144,4.368,16 C65.52,148.856,64,154.36,64,160s1.52,11.144,4.368,16C65.52,180.856,64,186.36,64,192s1.52,11.144,4.368,16 C65.52,212.856,64,218.36,64,224c0,6.048,1.784,11.648,4.712,16.472c-7.08-1.024-14.488,0.248-20.712,3.888 c-4.848-2.84-10.36-4.36-16-4.36c-17.648,0-32,14.352-32,32c0,5.64,1.52,11.144,4.368,16C1.52,292.856,0,298.36,0,304 s1.52,11.144,4.368,16C1.52,324.856,0,330.36,0,336s1.52,11.144,4.368,16C1.52,356.856,0,362.36,0,368s1.52,11.144,4.368,16 C1.52,388.856,0,394.36,0,400s1.52,11.144,4.368,16C1.52,420.856,0,426.36,0,432s1.52,11.144,4.368,16 C1.52,452.856,0,458.36,0,464c0,17.648,14.352,32,32,32c5.64,0,11.152-1.52,16-4.36c9.704,5.68,22.296,5.68,32,0 c9.704,5.68,22.296,5.68,32,0c9.704,5.68,22.296,5.68,32,0c4.848,2.84,10.36,4.36,16,4.36c17.648,0,32-14.352,32-32 c0-5.64-1.52-11.144-4.368-16c2.848-4.856,4.368-10.36,4.368-16s-1.52-11.144-4.368-16c2.848-4.856,4.368-10.36,4.368-16 s-1.52-11.144-4.368-16c2.848-4.856,4.368-10.36,4.368-16s-1.52-11.144-4.368-16c2.848-4.856,4.368-10.36,4.368-16 s-1.52-11.144-4.368-16c2.848-4.856,4.368-10.36,4.368-16s-1.52-11.144-4.368-16c2.848-4.856,4.368-10.36,4.368-16 c0-6.048-1.784-11.648-4.712-16.472c7.08,1.032,14.488-0.248,20.712-3.888c4.848,2.84,10.36,4.36,16,4.36 c8.6,0,16.376-3.448,22.128-8.984c10.032,31.264,31.768,57.312,60.04,72.984H264c-13.232,0-24,10.768-24,24 c0,2.816,0.576,5.488,1.472,8H232c-13.232,0-24,10.768-24,24s10.768,24,24,24h9.472c-0.896,2.512-1.472,5.184-1.472,8 c0,2.816,0.576,5.488,1.472,8H232c-13.232,0-24,10.768-24,24s10.768,24,24,24h9.472c-0.896,2.512-1.472,5.184-1.472,8 c0,13.232,10.768,24,24,24h208c13.232,0,24-10.768,24-24s-10.768-24-24-24h-9.472c0.896-2.512,1.472-5.184,1.472-8 c0-2.816-0.576-5.488-1.472-8H472c13.232,0,24-10.768,24-24s-10.768-24-24-24h-9.472c0.896-2.512,1.472-5.184,1.472-8 c0-2.816-0.576-5.488-1.472-8H472C485.232,368,496,357.232,496,344z M171.832,293.352c1.904,2.12,4.168,5.68,4.168,10.648 c0,4.968-2.264,8.528-4.168,10.648L167.008,320l4.824,5.352c1.904,2.12,4.168,5.68,4.168,10.648c0,4.968-2.264,8.528-4.168,10.648 L167.008,352l4.824,5.352c1.904,2.12,4.168,5.68,4.168,10.648c0,4.968-2.264,8.528-4.168,10.648L167.008,384l4.824,5.352 c1.904,2.12,4.168,5.68,4.168,10.648c0,4.968-2.264,8.528-4.168,10.648L167.008,416l4.824,5.352 c1.904,2.12,4.168,5.68,4.168,10.648c0,4.968-2.264,8.528-4.168,10.648L167.008,448l4.824,5.352 c1.904,2.12,4.168,5.68,4.168,10.648c0,8.824-7.176,16-16,16c-3.88,0-7.656-1.48-10.648-4.168L144,471.008l-5.352,4.824 c-5.984,5.384-15.312,5.384-21.296,0L112,471.008l-5.352,4.824c-5.984,5.384-15.312,5.384-21.296,0L80,471.008l-5.352,4.824 c-5.984,5.384-15.312,5.384-21.296,0L48,471.008l-5.352,4.824C39.656,478.52,35.88,480,32,480c-8.824,0-16-7.176-16-16 c0-4.968,2.264-8.528,4.168-10.648L24.992,448l-4.824-5.352C18.264,440.528,16,436.968,16,432c0-4.968,2.264-8.528,4.168-10.648 L24.992,416l-4.824-5.352C18.264,408.528,16,404.968,16,400c0-4.968,2.264-8.528,4.168-10.648L24.992,384l-4.824-5.352 C18.264,376.528,16,372.968,16,368c0-4.968,2.264-8.528,4.168-10.648L24.992,352l-4.824-5.352C18.264,344.528,16,340.968,16,336 c0-4.968,2.264-8.528,4.168-10.648L24.992,320l-4.824-5.352C18.264,312.528,16,308.968,16,304c0-4.968,2.264-8.528,4.168-10.648 L24.992,288l-4.824-5.352C18.264,280.528,16,276.968,16,272c0-8.824,7.176-16,16-16c3.88,0,7.656,1.48,10.648,4.168L48,264.992 l5.352-4.824c5.984-5.384,15.312-5.384,21.296,0L80,264.992l5.352-4.824c5.984-5.384,15.312-5.384,21.296,0l5.352,4.824 l5.352-4.824c5.984-5.384,15.312-5.384,21.296,0l5.352,4.824l5.352-4.824C152.344,257.48,156.12,256,160,256 c8.824,0,16,7.176,16,16c0,4.968-2.264,8.528-4.168,10.648L167.008,288L171.832,293.352z M235.832,53.352 C237.736,55.472,240,59.032,240,64s-2.264,8.528-4.168,10.648L231.008,80l4.824,5.352C237.736,87.472,240,91.032,240,96 s-2.264,8.528-4.168,10.648L231.008,112l4.824,5.352c1.904,2.12,4.168,5.68,4.168,10.648s-2.264,8.528-4.168,10.648L231.008,144 l4.824,5.352c1.904,2.12,4.168,5.68,4.168,10.648s-2.264,8.528-4.168,10.648L231.008,176l4.824,5.352 c1.904,2.12,4.168,5.68,4.168,10.648s-2.264,8.528-4.168,10.648L231.008,208l4.824,5.352c1.904,2.12,4.168,5.68,4.168,10.648 c0,8.824-7.176,16-16,16c-3.88,0-7.656-1.48-10.648-4.168L208,231.008l-5.352,4.824c-5.984,5.384-15.312,5.384-21.296,0 L176,231.008l-5.352,4.824c-5.984,5.384-15.312,5.384-21.296,0L144,231.008l-5.352,4.824c-5.984,5.384-15.312,5.384-21.296,0 L112,231.008l-5.352,4.824C103.656,238.52,99.88,240,96,240c-8.824,0-16-7.176-16-16c0-4.968,2.264-8.528,4.168-10.648L88.992,208 l-4.824-5.352C82.264,200.528,80,196.968,80,192s2.264-8.528,4.168-10.648L88.992,176l-4.824-5.352 C82.264,168.528,80,164.968,80,160s2.264-8.528,4.168-10.648L88.992,144l-4.824-5.352C82.264,136.528,80,132.968,80,128 s2.264-8.528,4.168-10.648L88.992,112l-4.824-5.352C82.264,104.528,80,100.968,80,96s2.264-8.528,4.168-10.648L88.992,80 l-4.824-5.352C82.264,72.528,80,68.968,80,64s2.264-8.528,4.168-10.648L88.992,48l-4.824-5.352C82.264,40.528,80,36.968,80,32 c0-8.824,7.176-16,16-16c3.88,0,7.656,1.48,10.648,4.168L112,24.992l5.352-4.824c5.984-5.384,15.312-5.384,21.296,0L144,24.992 l5.352-4.824c5.984-5.384,15.312-5.384,21.296,0L176,24.992l5.352-4.824c5.984-5.384,15.312-5.384,21.296,0L208,24.992 l5.352-4.824C216.344,17.48,220.12,16,224,16c8.824,0,16,7.176,16,16c0,4.968-2.264,8.528-4.168,10.648L231.008,48L235.832,53.352 z M256,208c0-61.76,50.24-112,112-112s112,50.24,112,112s-50.24,112-112,112S256,269.76,256,208z M472,464c4.416,0,8,3.592,8,8 c0,4.408-3.584,8-8,8H264c-4.416,0-8-3.592-8-8c0-4.408,3.584-8,8-8h136v-16H264h-32c-4.416,0-8-3.592-8-8c0-4.408,3.584-8,8-8h32 h176c4.416,0,8,3.592,8,8c0,4.408-3.584,8-8,8h-24v16h24H472z M472,400c4.416,0,8,3.592,8,8c0,4.408-3.584,8-8,8h-32H264 c-4.416,0-8-3.592-8-8c0-4.408,3.584-8,8-8h176H472z M440,352H312v16h128c4.416,0,8,3.592,8,8c0,4.408-3.584,8-8,8H264h-32 c-4.416,0-8-3.592-8-8c0-4.408,3.584-8,8-8h32h32v-16h-32c-4.416,0-8-3.592-8-8c0-4.408,3.584-8,8-8h208c4.416,0,8,3.592,8,8 c0,4.408-3.584,8-8,8H440z" fill="#0d98ba" /> <path d="M320,144c-13.232,0-24,10.768-24,24s10.768,24,24,24s24-10.768,24-24S333.232,144,320,144z M320,176c-4.416,0-8-3.592-8-8 s3.584-8,8-8c4.416,0,8,3.592,8,8S324.416,176,320,176z" fill="#0d98ba" /> <rect x="104" y="56" width="16" height="16" fill="#0d98ba" /> <rect x="136" y="56" width="16" height="16" fill="#0d98ba" /> <rect x="168" y="56" width="16" height="16" fill="#0d98ba" /> <rect x="200" y="56" width="16" height="16" fill="#0d98ba" /> <rect x="104" y="120" width="16" height="16" fill="#0d98ba" /> <rect x="136" y="120" width="16" height="16" fill="#0d98ba" /> <rect x="168" y="120" width="16" height="16" fill="#0d98ba" /> <rect x="200" y="120" width="16" height="16" fill="#0d98ba" /> <rect x="104" y="184" width="16" height="16" fill="#0d98ba" /> <rect x="136" y="184" width="16" height="16" fill="#0d98ba" /> <rect x="168" y="184" width="16" height="16" fill="#0d98ba" /> <rect x="200" y="184" width="16" height="16" fill="#0d98ba" /> <rect x="40" y="296" width="16" height="16" fill="#0d98ba" /> <rect x="72" y="296" width="16" height="16" fill="#0d98ba" /> <rect x="104" y="296" width="16" height="16" fill="#0d98ba" /> <rect x="136" y="296" width="16" height="16" fill="#0d98ba" /> <rect x="40" y="360" width="16" height="16" fill="#0d98ba" /> <rect x="72" y="360" width="16" height="16" fill="#0d98ba" /> <rect x="104" y="360" width="16" height="16" fill="#0d98ba" /> <rect x="136" y="360" width="16" height="16" fill="#0d98ba" /> <rect x="40" y="424" width="16" height="16" fill="#0d98ba" /> <rect x="72" y="424" width="16" height="16" fill="#0d98ba" /> <rect x="104" y="424" width="16" height="16" fill="#0d98ba" /> <rect x="136" y="424" width="16" height="16" fill="#0d98ba" /> <rect x="360" y="112" width="16" height="16" fill="#0d98ba" /> <rect x="360" y="200" width="16" height="16" fill="#0d98ba" /> <rect x="448" y="208" width="16" height="16" fill="#0d98ba" /> <rect x="408" y="272" width="16" height="16" fill="#0d98ba" /> <rect x="272" y="200" width="16" height="16" fill="#0d98ba" /></svg>},
        {"url" : "34", "categorias": "Golosinas", "svg": <svg className="category-img" xmlns="http://www.w3.org/2000/svg" id="Layer" viewBox="0 0 550 550" width="512" height="512"> <path d="m274.925781 236.589844h-9.070312v-93.292969c0-4.140625-3.355469-7.5-7.5-7.5s-7.5 3.359375-7.5 7.5v93.292969h-212.699219v-215.851563c0-3.164062 2.574219-5.738281 5.738281-5.738281h201.222657c3.164062 0 5.738281 2.574219 5.738281 5.738281v87.554688c0 4.144531 3.355469 7.503906 7.5 7.503906 4.140625 0 7.5-3.359375 7.5-7.503906v-87.554688c0-11.433593-9.304688-20.738281-20.738281-20.738281h-201.222657c-11.4375 0-20.738281 9.304688-20.738281 20.738281v215.851563h-9.070312c-7.765626 0-14.085938 6.320312-14.085938 14.085937v91.132813c0 4.101562 1.78125 7.988281 4.886719 10.667968 1.789062 1.539063 3.910156 2.578126 6.164062 3.074219v139.179688c0 9.523437 7.746094 17.269531 17.269531 17.269531h232.371094c9.523438 0 17.269532-7.746094 17.269532-17.269531v-139.179688c2.253906-.5 4.375-1.535156 6.164062-3.074219 3.105469-2.679687 4.886719-6.566406 4.886719-10.667968v-91.132813c0-7.765625-6.320313-14.085937-14.085938-14.085937zm-11.964843 258.140625c0 1.25-1.019532 2.269531-2.269532 2.269531h-232.371094c-1.253906 0-2.269531-1.019531-2.269531-2.269531v-140.457031l16.328125-2.421876v115.6875c0 7.652344 6.222656 13.875 13.871094 13.875h70.753906c4.140625 0 7.5-3.359374 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5h-69.625v-116.789062l87.125-12.929688 87.128906 12.929688v116.789062h-69.625c-4.144531 0-7.503906 3.355469-7.503906 7.5 0 4.144532 3.359375 7.5 7.503906 7.5h70.75c7.652344 0 13.875-6.222656 13.875-13.871093v-115.691407l16.328126 2.421876zm11.046874-153.984375c-.003906 0 .003907.003906 0 0l-78.402343-11.632813 78.402343-11.636719zm0-38.433594c-14.855468 2.203125-247.617187 36.746094-259.007812 38.433594v-89.15625h259.007812zm0 0" fill="#0d98ba" /> <path d="m234.207031 47.402344c0-7.179688-5.84375-13.023438-13.023437-13.023438h-55.332032c-7.179687 0-13.023437 5.84375-13.023437 13.023438v52.617187c0 7.183594 5.84375 13.023438 13.023437 13.023438h55.332032c7.183594 0 13.023437-5.839844 13.023437-13.023438zm-15 50.640625h-51.378906v-48.660157h51.378906zm0 0" fill="#0d98ba" /> <path d="m123.160156 133.316406h-55.332031c-7.183594 0-13.023437 5.84375-13.023437 13.023438v59.503906c0 7.179688 5.84375 13.019531 13.023437 13.019531h55.332031c7.179688 0 13.019532-5.839843 13.019532-13.019531v-59.503906c0-7.179688-5.839844-13.023438-13.019532-13.023438zm-1.980468 70.546875h-51.375v-55.546875h51.375zm0 0" fill="#0d98ba" /> <path d="m221.183594 133.316406h-55.332032c-7.183593 0-13.023437 5.84375-13.023437 13.023438v59.503906c0 7.179688 5.84375 13.019531 13.023437 13.019531h55.332032c7.179687 0 13.023437-5.839843 13.023437-13.019531v-59.503906c0-7.179688-5.84375-13.023438-13.023437-13.023438zm-1.976563 70.546875h-51.378906v-55.546875h51.378906zm0 0" fill="#0d98ba" /> <path d="m136.179688 47.402344c0-7.179688-5.839844-13.023438-13.019532-13.023438h-55.332031c-7.183594 0-13.023437 5.84375-13.023437 13.023438v52.617187c0 7.183594 5.84375 13.023438 13.023437 13.023438h55.332031c7.179688 0 13.019532-5.839844 13.019532-13.023438zm-15 50.640625h-51.375v-48.660157h51.375zm0 0" fill="#0d98ba" /></svg>},  
      ]
  }
}

  render() {
    return (
      <div className="main-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="styled-heading">
                <h3>Categorías más populares</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              {this.state.properties.map((result, index) => {
                return <SingleCategory result={result} index={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCategories;