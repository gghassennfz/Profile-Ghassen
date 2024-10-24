import React from 'react';

const ICON_SATURATION = (
  <div className="icon-saturation">
    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
      <path d="M167.436-162.538v-123.846l350-349.719-76.334-75.154 21.949-22.307 96.693 94.359 141.872-141.359q7.153-7.154 16.115-7.154t16.115 7.154l51.616 51.615q7.154 7.154 7.154 16.115 0 8.962-7.154 16.116L642.346-553.603l96.411 96.334-22.603 22.602-76.692-76.051-348.18 348.18H167.436Zm32.435-32.436h80.642l337.718-338.898-79.462-79.461-338.898 337.718v80.641Zm421.245-383.347 134.692-134.692-37.898-37.898-134.692 134.693 37.898 37.897Zm0 0-37.898-37.897 37.898 37.897Z"/>
    </svg>
  </div>
);

const ICON_CONTRAST = (
  <div className="icon-contrast">
    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
      <path d="M480.226-122.82q-74.107 0-139.447-28.132-65.341-28.132-113.675-76.357-48.334-48.226-76.309-113.333-27.975-65.107-27.975-139.132 0-74.107 28.132-139.447 28.132-65.341 76.357-113.675 48.226-48.334 113.333-76.309 65.107-27.975 139.132-27.975 74.107 0 139.447 28.132 65.341 28.131 113.675 76.357t76.309 113.333q27.975 65.107 27.975 139.132 0 74.107-28.132 139.447-28.131 65.341-76.357 113.675t-113.333 76.309q-65.107 27.975-139.132 27.975Zm15.03-32.654q127.257-6.295 218.372-98.166 91.116-91.872 91.116-226.341 0-134.006-89.923-225.526-89.924-91.519-219.565-99.237v649.27Z"/>
    </svg>
  </div>
);

const ICON_BRIGHTNESS = (
  <div className="icon-brightness">
    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
      <path d="M464.141-806.564v-91.18h32.436v91.18h-32.436Zm0 744.026v-91.18h32.436v91.18h-32.436Zm342.641-401.385v-32.436h91.18v32.436h-91.18Zm-744.026 0v-32.436h91.18v32.436h-91.18ZM729.474-706l-23.41-23.923 56-55.641L785.115-762l-55.641 56Zm-530.82 531.282-23.052-23.564 55.642-56 23.41 23.41-56 56.154Zm563.41 0-56-56.154 23.41-23.41 55.641 56-23.051 23.564ZM231.244-706l-55.642-56 23.052-23.564 56 55.641L231.244-706Zm248.9 418.872q-80.939 0-136.868-56.066-55.93-56.065-55.93-137.139 0-80.629 55.997-136.981 55.996-56.353 136.724-56.353 80.728 0 137.273 56.501 56.545 56.5 56.545 136.858 0 80.988-56.508 137.084-56.508 56.096-137.233 56.096Zm-.281-32.436q67.708 0 114.647-46.546 46.939-46.545 46.939-113.894t-46.895-114.288q-46.895-46.939-114.603-46.939-67.707 0-113.938 47.058-46.231 47.057-46.231 114.081 0 67.023 46.187 113.776 46.186 46.752 113.894 46.752ZM480-480.5Z"/>
    </svg>
  </div>
);

const ICON_FLIP = (
  <div className="icon-flip">
    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
      <path d="M383.423-162.82H219.871q-23.136 0-40.093-16.958-16.958-16.957-16.958-40.093v-520.258q0-23.136 16.958-40.093 16.957-16.958 40.093-16.958h163.552v32.436H219.871q-10.769 0-17.692 6.923t-6.923 17.692v520.258q0 10.769 6.923 17.692t17.692 6.923h163.552v32.436Zm81.321 121.128V-902.36h32.436v860.667h-32.436ZM578.026-162.82v-32.436h114.282v32.436H578.026Zm0-601.924v-32.436h114.282v32.436H578.026ZM764.744-162.82v-32.436h32.436q0 13.359-9.778 22.897-9.778 9.539-22.658 9.539Zm0-104.872v-95.449h32.436v95.449h-32.436Zm0-167.385v-90.449h32.436v90.449h-32.436Zm0-162.885v-94.346h32.436v94.346h-32.436Zm0-166.782v-32.436q12.897 0 22.667 9.91 9.769 9.911 9.769 22.526h-32.436Z"/>
    </svg>
  </div>
);

const ICON_CROP = (
  <div className="icon-crop">
    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
      <path d="M704.59-62.538V-223.77H281.038q-23.995 0-40.523-16.732-16.528-16.733-16.528-40.319v-424.27H62.757v-32.436h161.23v-160.218h32.436v616.924q0 9.743 7.244 17.179 7.243 7.436 17.371 7.436h616.924v32.436H737.026v161.23H704.59Zm0-226.103v-391.834q0-9.23-7.692-16.923-7.693-7.692-16.923-7.692H288.859v-32.436h391.116q23.189 0 40.12 17.108 16.931 17.109 16.931 39.943v391.834H704.59Z"/>
    </svg>
  </div>
);

const ICON_UNDO = (
  <div className="icon-undo">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M478-172q-117 0-204-76T173-440h28q17 103 94.5 171.5T478-200q117 0 198.5-81.5T758-480q0-117-81.5-198.5T478-760q-60 0-113 24.5T270-668h96v28H222v-144h28v96q45-47 104-73.5T478-788q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24Zm133-158L467-474v-206h28v194l136 136-20 20Z"/>
    </svg>
  </div>
);

const ICON_SPINNER = (
  <div className="icon-spinner">
    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
      <path d="M479.517-122.82q-73.35 0-138.585-27.484-65.235-27.483-114.19-76.438t-76.438-114.19q-27.484-65.235-27.484-138.749 0-74.633 27.684-139.608 27.685-64.974 76.33-113.779 48.645-48.804 114.154-76.458Q406.497-837.18 480-837.18q6.965 0 11.771 4.538 4.806 4.539 4.806 11.392 0 7.622-4.806 12.064T480-804.744q-134.834 0-229.789 94.95-94.955 94.949-94.955 229.776 0 134.826 94.95 229.794 94.949 94.968 229.776 94.968 134.826 0 229.794-94.955Q804.744-345.166 804.744-480q0-7.004 4.513-11.79 4.513-4.787 11.968-4.787 7.07 0 11.513 4.806 4.442 4.806 4.442 11.771 0 73.503-27.654 139.012t-76.443 114.154q-48.789 48.645-113.743 76.33-64.953 27.684-139.823 27.684Z"/>
    </svg>
  </div>
);

const ICON_COLORS = (
  <div className="icon-colors">
    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
      <path d="M455.884-142.256v-193.885h32.436v80.91h329.924v32.436H488.32v80.539h-32.436Zm-313.91-80.539v-32.436h201.475v32.436H141.974Zm169.039-161.09v-80.038H141.974v-32.436h169.039v-80.846h32.436v193.32h-32.436Zm144.871-80.038v-32.436h362.36v32.436h-362.36Zm160.885-161.231v-193.372h32.436v80.539h169.039v32.436H649.205v80.397h-32.436Zm-474.795-80.397v-32.436h362.36v32.436h-362.36Z"/>
    </svg>
  </div>
);

const ICON_FILTER = (
  <div className="icon-filter">
    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
      <path d="M478.462-122.82q-72.757 0-137.742-28.107-64.984-28.107-113.335-76.65-48.351-48.543-76.458-113.72-28.107-65.177-28.107-138.71 0-74.826 28.888-139.959 28.888-65.133 78.731-113.404 49.843-48.271 116.599-76.041 66.757-27.769 142.458-27.769 69.909 0 132.437 23.103 62.529 23.102 110.369 64.363 47.841 41.262 76.36 98.469Q837.18-594.039 837.18-527q0 89.853-50.737 145.337-50.738 55.484-144.241 55.484h-70.484q-28.859 0-48.994 20.047-20.134 20.048-20.134 48.495 0 29.738 14.923 46.72 14.923 16.981 14.923 39.199 0 22.859-13.641 35.879-13.641 13.019-40.333 13.019ZM480-480Zm-223.286 14.949q14.653 0 25.405-10.672 10.753-10.672 10.753-25.325 0-14.652-10.672-25.405-10.672-10.752-25.325-10.752-14.652 0-25.405 10.672-10.752 10.672-10.752 25.324 0 14.653 10.672 25.405 10.672 10.753 25.324 10.753Zm121.667-162.513q14.652 0 25.405-10.672 10.752-10.672 10.752-25.325 0-14.652-10.672-25.405-10.672-10.752-25.324-10.752-14.652 0-25.405 10.672-10.753 10.672-10.753 25.324 0 14.653 10.673 25.405 10.672 10.753 25.324 10.753Zm203.359 0q14.652 0 25.405-10.672 10.753-10.672 10.753-25.325 0-14.652-10.673-25.405-10.672-10.752-25.324-10.752-14.652 0-25.405 10.672-10.752 10.672-10.752 25.324 0 14.653 10.672 25.405 10.672 10.753 25.324 10.753Zm122.667 162.513q14.652 0 25.405-10.672 10.752-10.672 10.752-25.325 0-14.652-10.672-25.405-10.672-10.752-25.324-10.752-14.652 0-25.405 10.672-10.753 10.672-10.753 25.324 0 14.653 10.673 25.405 10.672 10.753 25.324 10.753ZM478.469-155.256q10.756 0 16.143-4.539Q500-164.333 500-173.41q0-14-14.782-27.961-14.782-13.962-14.782-51.116 0-44.167 29.256-75.147 29.256-30.981 72.264-30.981h70.275q78.308 0 120.41-46.186 42.103-46.186 42.103-122.276 0-124.654-95.301-201.16-95.302-76.507-219.797-76.507-140.992 0-237.691 94.388Q155.256-615.968 155.256-480q0 134.91 94.66 229.827 94.661 94.917 228.553 94.917Z"/>
    </svg>
  </div>
);


export {
  ICON_SATURATION,
  ICON_CONTRAST,
  ICON_BRIGHTNESS,
  ICON_FLIP,
  ICON_CROP,
  ICON_UNDO,
  ICON_SPINNER,
  ICON_FILTER,
  ICON_COLORS
};
