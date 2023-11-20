import { motion } from "framer-motion";
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(0, 0, 0, 1)",
    transition: {
      duration: 1.8,
      ease: "easeInOut",
    },
  },
};

const svg = {
  hidden: {
    opacity: 0,
    // scaleX: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2.4,
      ease: "easeInOut",
    },
  },
};

const Logo = () => (
  <motion.svg
    width="80px"
    height="80px"
    viewBox="0 0 32 32"
    className="h-10 w-fit p-[.15rem] animate-logo"
    // variants={svg}
    // initial="hidden"
    // animate="visible"
  >
    <motion.path
      initial="hidden"
      animate="visible"
      //   transition={{ duration: 2, ease: "easeInOut" }}
      variants={icon}
      fill=""
      d="M27.677,28.742c0.054-0.104,0.09-0.215,0.08-0.337c-0.069-0.787-0.084-1.578-0.125-2.369
	  c-0.008-0.169-0.074-0.32-0.164-0.45c-0.105-0.259-0.354-0.447-0.644-0.457c-0.01-0.198-0.017-0.395-0.03-0.594
	  c-0.021-0.324-0.023-0.651-0.029-0.975c-0.015-0.701-0.013-1.4-0.044-2.1c-0.029-0.708-0.098-1.413-0.117-2.122
	  c-0.019-0.749-0.052-1.496-0.125-2.241c-0.073-0.745-0.157-1.49-0.221-2.237c-0.065-0.785-0.146-1.574-0.257-2.356
	  c-0.115-0.793-0.328-1.561-0.672-2.289c-0.338-0.707-0.703-1.4-1.196-2.012c-0.467-0.578-1.021-1.06-1.594-1.53
	  c-0.599-0.493-1.204-0.969-1.882-1.35c-0.349-0.196-0.732-0.336-1.102-0.48c-0.326-0.125-0.66-0.221-1.004-0.282
	  c-0.382-0.067-0.768-0.11-1.156-0.119c-0.04-0.001-0.08-0.001-0.119-0.001c-0.359,0-0.713,0.037-1.071,0.086
	  c-0.3,0.041-0.596,0.124-0.888,0.214c-0.105-0.338-0.23-0.677-0.421-0.97c-0.127-0.196-0.273-0.38-0.426-0.557
	  c-0.163-0.186-0.363-0.33-0.559-0.478c-0.33-0.248-0.73-0.405-1.11-0.553c-0.28-0.111-0.586-0.136-0.883-0.167
	  C11.822,2.005,11.728,2,11.634,2c-0.217,0-0.431,0.025-0.65,0.061c-0.38,0.065-0.747,0.154-1.098,0.315
	  c-0.39,0.177-0.73,0.495-1.02,0.808c-0.263,0.282-0.49,0.63-0.668,0.971C8.023,4.492,7.925,4.864,7.839,5.231
	  C7.668,5.959,7.56,6.713,7.535,7.46C7.512,8.142,7.526,8.828,7.542,9.51c-0.598,0.46-1.187,0.939-1.65,1.539
	  c-0.455,0.589-0.789,1.273-1.012,1.981c-0.425,1.36-0.422,2.807-0.512,4.215c-0.083,0.126-0.143,0.267-0.143,0.43
	  c0,0.43,0.367,0.822,0.808,0.808c0.716-0.023,1.433-0.059,2.15-0.084c0.018,0.083,0.042,0.164,0.08,0.247
	  c0.136,0.29,0.275,0.578,0.424,0.86c0.221,0.417,0.582,0.745,0.956,1.021c0.372,0.275,0.789,0.486,1.238,0.597
	  c0.43,0.107,0.904,0.125,1.344,0.083c0.361-0.033,0.722-0.104,1.066-0.217c0.34-0.112,0.684-0.242,0.973-0.455
	  c0.321-0.234,0.58-0.517,0.781-0.86c0.209-0.357,0.346-0.764,0.484-1.15c0.019-0.055,0.011-0.11,0.016-0.166
	  c0.087-0.002,0.174-0.008,0.261-0.009c0.459-0.008,0.918-0.002,1.375,0.002c0.142,0.002,0.286,0.002,0.43,0
	  c0.346,0,0.691-0.002,1.035,0.019c0.11,0.007,0.214-0.016,0.311-0.055c0.058,0.011,0.112,0.035,0.173,0.035
	  c0.248,0,0.488-0.1,0.664-0.274c0.184-0.184,0.255-0.407,0.273-0.662c0.023-0.307-0.035-0.63-0.061-0.935
	  c-0.033-0.361-0.075-0.72-0.121-1.079c-0.106-0.823-0.209-1.643-0.492-2.429c-0.15-0.411-0.305-0.823-0.49-1.221
	  c-0.152-0.33-0.357-0.632-0.559-0.935c-0.236-0.353-0.513-0.699-0.831-0.979c-0.272-0.237-0.573-0.44-0.877-0.636
	  c-0.003-0.292-0.007-0.584-0.005-0.876c0.039,0.005,0.079,0.026,0.117,0.022c0.464-0.049,0.92-0.07,1.384-0.021
	  c0.275,0.043,0.547,0.093,0.814,0.166c0.305,0.082,0.601,0.187,0.893,0.304c0.374,0.17,0.723,0.38,1.054,0.623
	  c0.457,0.396,0.868,0.836,1.247,1.307c0.238,0.323,0.45,0.654,0.618,1.02c0.269,0.703,0.413,1.452,0.536,2.194
	  c0.095,0.781,0.157,1.568,0.225,2.352c0.071,0.816,0.102,1.634,0.129,2.454c0.027,0.812,0.035,1.628,0.031,2.44
	  c-0.006,0.781-0.052,1.561-0.063,2.342c-0.007,0.543,0.01,1.085,0.045,1.626c-0.067,0-0.134,0.001-0.202,0
	  c-1.448-0.017-2.895-0.01-4.345-0.004c-2.106,0.006-4.218,0.033-6.324-0.048c-0.008,0-0.016,0-0.025,0
	  c-0.134,0-0.253,0.052-0.362,0.122c-0.363,0.078-0.655,0.39-0.648,0.775c0.01,0.574,0.027,1.148,0.038,1.722
	  c0.006,0.242,0.01,0.484,0.017,0.728c0.008,0.305,0.013,0.615,0.079,0.914c0.092,0.423,0.574,0.663,0.973,0.553
	  c0.035-0.01,0.059-0.033,0.092-0.047c0.736,0.02,1.472,0.022,2.208,0.04c0.776,0.017,1.549,0.04,2.325,0.067
	  c1.066,0.036,2.133,0.025,3.201,0.013c0.553-0.006,1.104-0.012,1.657-0.012c0.476,0,0.952,0.004,1.428-0.011
	  c0.467-0.017,0.935-0.05,1.402-0.071c0.933-0.042,1.866,0,2.799,0c0.434,0,0.797-0.363,0.797-0.797
	  C27.774,28.971,27.734,28.852,27.677,28.742z M12.704,18.569c-0.068,0.145-0.141,0.281-0.229,0.413
	  c-0.066,0.072-0.135,0.14-0.208,0.204c-0.122,0.079-0.248,0.148-0.378,0.21c-0.23,0.083-0.465,0.149-0.705,0.197
	  c-0.25,0.021-0.496,0.02-0.747-0.003c-0.137-0.027-0.268-0.062-0.399-0.107c-0.21-0.104-0.409-0.222-0.6-0.358
	  c-0.114-0.097-0.222-0.198-0.325-0.308c-0.091-0.138-0.167-0.285-0.24-0.434c0.382,0.002,0.764-0.004,1.146-0.001
	  c0.826,0.01,1.649,0.036,2.475,0.038c0.088,0,0.177-0.005,0.265-0.007C12.741,18.465,12.725,18.518,12.704,18.569z M16.414,12.719
	  c0.138,0.338,0.263,0.679,0.378,1.023c0.127,0.375,0.187,0.772,0.243,1.163c0.071,0.588,0.11,1.182,0.135,1.775
	  c-0.044,0-0.089-0.003-0.133-0.003c-0.204,0-0.408,0.003-0.612,0.005c-0.374,0.002-0.749,0.006-1.123,0.019
	  c-0.778,0.029-1.553,0.102-2.331,0.121c-0.816,0.019-1.634,0.002-2.45-0.013c-0.805-0.015-1.611-0.006-2.417,0.013
	  c-0.665,0.016-1.329,0.021-1.994,0.027c0.013-0.261,0.027-0.522,0.034-0.784c0.013-0.474,0.035-0.952,0.083-1.427
	  c0.078-0.486,0.203-0.96,0.384-1.42c0.186-0.413,0.408-0.799,0.674-1.165c0.319-0.373,0.683-0.682,1.066-0.987
	  C8.438,11,8.526,10.934,8.615,10.868c0.19-0.144,0.336-0.284,0.401-0.522c0.004-0.014,0-0.029,0.003-0.043
	  c0.18-0.163,0.299-0.39,0.292-0.643C9.278,8.584,9.235,7.514,9.355,6.441C9.426,5.96,9.518,5.472,9.682,5.014
	  C9.78,4.811,9.9,4.621,10.031,4.438c0.123-0.142,0.26-0.268,0.403-0.388c0.07-0.048,0.142-0.092,0.218-0.131
	  c0.251-0.088,0.509-0.152,0.77-0.197c0.13-0.006,0.257-0.001,0.385,0.012c0.143,0.026,0.28,0.061,0.417,0.11
	  c0.264,0.123,0.515,0.262,0.753,0.429c0.138,0.12,0.265,0.249,0.383,0.389c0.065,0.096,0.122,0.195,0.173,0.298
	  c0.12,0.326,0.206,0.658,0.262,1.001c0.134,1.208,0.1,2.427,0.089,3.64c-0.003,0.251,0.111,0.476,0.286,0.637
	  c0.075,0.126,0.169,0.241,0.3,0.323c0.26,0.162,0.525,0.317,0.776,0.492c0.169,0.146,0.322,0.305,0.465,0.476
	  C15.978,11.906,16.222,12.299,16.414,12.719z M24.227,25.009c0.005,0.034,0.01,0.069,0.014,0.104
	  c-0.001-0.003-0.002-0.007-0.003-0.01C24.235,25.07,24.231,25.039,24.227,25.009z M24.198,22.941
	  c0.002-0.785,0.019-1.569,0.004-2.352c-0.033-1.638-0.131-3.275-0.275-4.906c-0.079-0.887-0.138-1.778-0.29-2.657
	  c-0.071-0.411-0.154-0.818-0.253-1.223C23.246,11.235,23,10.697,22.697,10.2c-0.225-0.371-0.513-0.718-0.797-1.044
	  c-0.259-0.298-0.539-0.584-0.837-0.845c-0.662-0.576-1.438-1-2.267-1.286c-0.442-0.154-0.891-0.248-1.354-0.326
	  c-0.367-0.063-0.729-0.095-1.094-0.095c-0.198,0-0.397,0.009-0.598,0.028c-0.052,0.005-0.096,0.021-0.144,0.031
	  c-0.006-0.108-0.005-0.217-0.013-0.325c0.387-0.126,0.772-0.246,1.173-0.313c0.478-0.051,0.96-0.055,1.439-0.003
	  c0.258,0.038,0.515,0.086,0.765,0.166c0.257,0.084,0.51,0.175,0.76,0.275c0.565,0.259,1.078,0.609,1.57,0.986
	  c0.679,0.539,1.332,1.104,1.885,1.773c0.397,0.562,0.714,1.185,0.995,1.811c0.11,0.277,0.212,0.557,0.292,0.844
	  c0.087,0.305,0.14,0.615,0.186,0.928c0.041,0.343,0.067,0.685,0.1,1.03c0.038,0.386,0.083,0.772,0.121,1.16
	  c0.075,0.743,0.165,1.488,0.236,2.233c0.069,0.718,0.075,1.438,0.096,2.16c0.021,0.728,0.071,1.455,0.092,2.183
	  c0.021,0.674,0.015,1.348,0.025,2.02c0.009,0.519,0.04,1.034,0.067,1.551c-0.384,0.005-0.767,0.006-1.151,0.01
	  c-0.002-0.008,0.002-0.015,0-0.023C24.175,24.4,24.194,23.67,24.198,22.941z M24.768,28.355c-0.77,0.019-1.538,0.073-2.31,0.083
	  c-0.772,0.01-1.544,0.006-2.314,0.01c-0.818,0.004-1.636,0.025-2.454,0.015c-0.492-0.006-0.985-0.015-1.476-0.037
	  c-0.478-0.021-0.958-0.023-1.436-0.031c-0.803-0.012-1.604-0.042-2.405-0.072c-0.006-0.235-0.006-0.469-0.005-0.702
	  c0.004-0.339,0.003-0.678,0.004-1.016c1.34,0.026,2.681,0.017,4.02,0.016c1.475-0.002,2.949,0.012,4.424,0.012
	  c0.977,0,1.955,0.032,2.932,0.006c0.536-0.013,1.069-0.042,1.603-0.054c0.241-0.006,0.484-0.004,0.727-0.004
	  c0.045,0.581,0.093,1.161,0.133,1.74C25.73,28.331,25.249,28.342,24.768,28.355z M14.863,12.177
	  c0.207,0.259,0.411,0.528,0.553,0.829c0.263,0.562,0.351,1.198,0.455,1.803c0.052,0.3,0.012,0.58-0.211,0.803
	  c-0.154,0.154-0.365,0.242-0.582,0.242c-0.219,0-0.43-0.088-0.584-0.242c-0.165-0.167-0.219-0.357-0.24-0.582
	  c-0.004-0.04-0.009-0.08-0.013-0.121c-0.058-0.367-0.132-0.742-0.258-1.093c-0.077-0.156-0.169-0.302-0.27-0.444
	  c-0.226-0.267-0.48-0.5-0.751-0.723c-0.163-0.134-0.246-0.392-0.246-0.595c0-0.223,0.09-0.438,0.246-0.595
	  c0.157-0.157,0.374-0.248,0.597-0.248c0.24,0,0.417,0.1,0.595,0.248C14.416,11.676,14.65,11.911,14.863,12.177z"
    />
  </motion.svg>
);

export default Logo;

export const Example = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className=" h-20 w-16"
  >
    <motion.path
      variants={icon}
      initial="hidden"
      animate="visible"
      fill="none"
      stroke="#000"
      d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
    />
    <motion.path
      variants={icon}
      initial="hidden"
      animate="visible"
      fill="none"
      stroke="#000"
      d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
    />
  </svg>
);
