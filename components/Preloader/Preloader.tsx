import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { preloaderInit } from '../../store/ducks/preloader';
import { PreloaderContainer, LogoContainer } from './Preloader.styles';

interface FooterDataProps {
  preloader: {
    preloaderAnimationEnd: boolean;
  };
}

const Preloader: FC = () => {
  const animationEnd = useSelector((state: FooterDataProps) => state.preloader.preloaderAnimationEnd);
  const dispatch = useDispatch();

  const handleAnimationEnd = () => {
    setTimeout(() => {
      dispatch(preloaderInit({ preloaderAnimationEnd: true }));
    }, 3000);
  };
  return (
    <PreloaderContainer onAnimationEnd={handleAnimationEnd} animationEnd={animationEnd}>
      <LogoContainer>
        <svg id="eMGum8C5pt31" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650.290000 232.970000" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
          <g id="eMGum8C5pt32">
            <g id="eMGum8C5pt33_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt33"
                d="M136.690000,6.910000C137.416819,7.710024,137.807224,8.759461,137.780000,9.840000L137.780000,153.060000C137.765969,154.216854,137.251735,155.310967,136.370000,156.060000C135.529638,156.888677,134.400161,157.358397,133.220000,157.370000C131.999224,157.401326,130.819660,156.927329,129.960000,156.060000C129.136355,155.278657,128.666888,154.195271,128.660000,153.060000L128.660000,23.290000L72.660000,107.920000C72.051621,109.003180,70.902299,109.669786,69.660000,109.660000C68.270663,109.765807,66.936248,109.096676,66.190000,107.920000L10,23.070000L10,153.070000C9.996618,154.206006,9.526578,155.290712,8.700000,156.070000C7.920366,156.897332,6.836758,157.370508,5.700000,157.380000C4.510531,157.432415,3.359540,156.952224,2.560000,156.070000C1.787010,155.262865,1.356894,154.187574,1.360000,153.070000L1.360000,9.840000C1.390948,8.750022,1.817488,7.708553,2.560000,6.910000C3.248383,6.033800,4.295838,5.515585,5.410000,5.500000C7.040783,5.389117,8.608349,6.150072,9.530000,7.500000L69.640000,96.900000L129.750000,7.500000C130.582427,6.054556,132.224420,5.277398,133.870000,5.550000C134.945958,5.638563,135.950797,6.123166,136.690000,6.910000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
            <g id="eMGum8C5pt34_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt34"
                d="M301.500000,121.060000C296.204499,132.070046,287.910118,141.362664,277.570000,147.870000Q262.240000,157.440000,242.650000,157.440000Q223.060000,157.440000,207.730000,147.870000C197.390390,141.364986,189.098680,132.071476,183.810000,121.060000Q175.230000,103.810000,175.230000,81.730000Q175.230000,59.650000,183.810000,42.400000C189.098680,31.388524,197.390390,22.095014,207.730000,15.590000Q223.080000,6,242.650000,6Q262.220000,6,277.570000,15.570000C287.912953,22.082743,296.207608,31.382601,301.500000,42.400000Q310.060000,59.650000,310.080000,81.730000Q310.100000,103.810000,301.500000,121.060000ZM294.130000,46.610000C284.752468,26.663689,264.695723,13.930388,242.655000,13.930388C220.614277,13.930388,200.557532,26.663689,191.180000,46.610000Q183.710000,62,183.710000,81.730000Q183.710000,101.460000,191.180000,116.850000C200.545927,136.825253,220.618012,149.582859,242.680000,149.582859C264.741988,149.582859,284.814073,136.825253,294.180000,116.850000Q301.640000,101.510000,301.650000,81.730000Q301.660000,61.950000,294.130000,46.610000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
            <g id="eMGum8C5pt35_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt35"
                d="M620.740000,16C631.043477,22.742122,639.133318,32.369241,644,43.680000C649.120920,55.641202,651.689008,68.539544,651.540000,81.550000Q651.540000,103.030000,644,120.180000C639.179482,131.358081,631.128328,140.840474,620.880000,147.410000Q605.280000,157.510000,582,157.500000L519.750000,157.500000C518.504442,157.515187,517.300983,157.049563,516.390000,156.200000C515.500808,155.454714,514.979026,154.360065,514.960000,153.200000L514.960000,9.940000C514.979026,8.779935,515.500808,7.685286,516.390000,6.940000C517.300983,6.090437,518.504442,5.624813,519.750000,5.640000L582,5.640000Q605.050000,5.600000,620.740000,16ZM626.130000,130.250000Q641.460000,111.690000,641.460000,81.530000C641.599047,69.950535,639.355945,58.466125,634.870000,47.790000C630.660256,37.807966,623.572130,29.306392,614.510000,23.370000Q600.730000,14.270000,579.650000,14.260000L525,14.260000L525,148.820000L579.630000,148.820000Q610.790000,148.820000,626.130000,130.270000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
            <g id="eMGum8C5pt36_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt36"
                d="M468.160000,121.060000C462.871320,132.071476,454.579610,141.364986,444.240000,147.870000Q428.890000,157.440000,409.320000,157.440000Q389.750000,157.440000,374.400000,147.870000C364.057406,141.365593,355.762311,132.072175,350.470000,121.060000Q341.890000,103.810000,341.900000,81.730000Q341.910000,59.650000,350.470000,42.400000C355.762311,31.387825,364.057406,22.094407,374.400000,15.590000Q389.730000,6,409.320000,6Q428.910000,6,444.240000,15.570000C454.582449,22.080419,462.874434,31.381171,468.160000,42.400000Q476.740000,59.650000,476.740000,81.730000Q476.740000,103.810000,468.160000,121.060000ZM460.790000,46.610000C451.424073,26.634747,431.351988,13.877141,409.290000,13.877141C387.228012,13.877141,367.155927,26.634747,357.790000,46.610000Q350.370000,62,350.370000,81.730000Q350.370000,101.460000,357.840000,116.850000C367.200059,136.832239,387.274176,149.596424,409.340000,149.596424C431.405824,149.596424,451.479941,136.832239,460.840000,116.850000Q468.310000,101.510000,468.310000,81.730000Q468.310000,61.950000,460.790000,46.610000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
          </g>
          <g id="eMGum8C5pt37">
            <g id="eMGum8C5pt38_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt38"
                d="M6.390000,237.580000C4.805753,236.976410,3.352611,236.073289,2.110000,234.920000C1.595800,234.528992,1.286827,233.925760,1.270000,233.280000C1.276954,232.789565,1.478382,232.321964,1.830000,231.980000C2.166216,231.605972,2.647099,231.394675,3.150000,231.400000C3.578643,231.393293,3.993634,231.550703,4.310000,231.840000C5.273962,232.749039,6.391189,233.480314,7.610000,234C8.837830,234.485897,10.149736,234.723808,11.470000,234.700000C12.974007,234.747669,14.457802,234.343631,15.730000,233.540000C16.786878,232.944201,17.448993,231.833064,17.470000,230.620000C17.486796,229.317758,16.828514,228.099559,15.730000,227.400000C14.130304,226.463147,12.376064,225.819700,10.550000,225.500000C8.236189,225.134653,6.053953,224.184657,4.210000,222.740000C2.710435,221.397956,1.898101,219.449825,2,217.440000C1.969735,215.964217,2.403453,214.516158,3.240000,213.300000C4.105408,212.080611,5.297940,211.130746,6.680000,210.560000C8.258430,209.880787,9.961752,209.540123,11.680000,209.560000C13.274671,209.552257,14.858450,209.822988,16.360000,210.360000C17.683813,210.805705,18.897436,211.528424,19.920000,212.480000C20.466637,212.888467,20.803673,213.518577,20.840000,214.200000C20.839663,214.681966,20.644983,215.143432,20.300000,215.480000C19.964863,215.841408,19.492859,216.044733,19,216.040000C18.664343,216.050579,18.336640,215.936596,18.080000,215.720000C17.232726,214.950298,16.235060,214.364637,15.150000,214C14.031946,213.542218,12.838009,213.298003,11.630000,213.280000C10.130993,213.203088,8.644371,213.586957,7.370000,214.380000C6.381236,215.035872,5.786809,216.143483,5.786809,217.330000C5.786809,218.516517,6.381236,219.624128,7.370000,220.280000C8.825801,221.128368,10.415037,221.723486,12.070000,222.040000C13.822485,222.388797,15.532333,222.925220,17.170000,223.640000C18.411360,224.187121,19.472324,225.074725,20.230000,226.200000C21.002724,227.489556,21.378365,228.978206,21.310000,230.480000C21.330965,231.958951,20.871259,233.404742,20,234.600000C19.089282,235.830841,17.867495,236.797226,16.460000,237.400000C14.910154,238.080615,13.232571,238.421587,11.540000,238.400000C9.788418,238.432376,8.044910,238.154769,6.390000,237.580000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
            <g id="eMGum8C5pt39_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt39"
                d="M147.360000,210.500000C147.726816,210.846534,147.924045,211.335955,147.900000,211.840000C147.924962,212.338360,147.727098,212.822028,147.360000,213.160000C146.976997,213.488313,146.484074,213.659765,145.980000,213.640000L138.860000,213.640000L138.860000,236.080000C138.869078,236.595228,138.658115,237.089899,138.280000,237.440000C137.450432,238.188149,136.189568,238.188149,135.360000,237.440000C134.981885,237.089899,134.770922,236.595228,134.780000,236.080000L134.780000,213.640000L127.700000,213.640000C127.193256,213.654252,126.700008,213.475539,126.320000,213.140000C125.953184,212.793466,125.755955,212.304045,125.780000,211.800000C125.762372,211.308755,125.959504,210.834178,126.320000,210.500000C126.700008,210.164461,127.193256,209.985748,127.700000,210L146,210C146.499895,209.990815,146.985100,210.169199,147.360000,210.500000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
            <g id="eMGum8C5pt310_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt310"
                d="M649.820000,231.320000C648.710939,233.450499,647.045235,235.240613,645,236.500000C640.705656,239.032859,635.374344,239.032859,631.080000,236.500000C629.034765,235.240613,627.369061,233.450499,626.260000,231.320000C623.940440,226.715633,623.940440,221.284367,626.260000,216.680000C627.369061,214.549501,629.034765,212.759387,631.080000,211.500000C635.374344,208.967141,640.705656,208.967141,645,211.500000C647.045235,212.759387,648.710939,214.549501,649.820000,216.680000C652.139560,221.284367,652.139560,226.715633,649.820000,231.320000ZM646.240000,218.580000C645.496589,217.030757,644.341042,215.716062,642.900000,214.780000C639.917157,212.954416,636.162843,212.954416,633.180000,214.780000C631.737635,215.705843,630.581206,217.014615,629.840000,218.560000C628.239909,222.010176,628.239909,225.989824,629.840000,229.440000C630.583411,230.989243,631.738958,232.303938,633.180000,233.240000C636.158910,235.079492,639.921090,235.079492,642.900000,233.240000C644.341042,232.303938,645.496589,230.989243,646.240000,229.440000C647.840023,226.003794,647.840023,222.036206,646.240000,218.600000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
            <g id="eMGum8C5pt311_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt311"
                d="M517.310000,237.440000C516.934267,237.802170,516.431855,238.003135,515.910000,238C515.378986,238.021277,514.863550,237.818006,514.490000,237.440000C514.136428,237.047316,513.959321,236.526839,514,236L514,211.920000C513.989266,211.410460,514.188085,210.918836,514.550000,210.560000C514.938059,210.185465,515.460932,209.983528,516,210C516.516184,209.995635,517.012823,210.197170,517.380000,210.560000C517.754976,210.912303,517.965316,211.405514,517.960000,211.920000L517.960000,236C517.972366,236.553622,517.733380,237.083069,517.310000,237.440000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
            <g id="eMGum8C5pt312_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt312"
                d="M402,211.880000C403.785261,213.154200,405.172315,214.908823,406,216.940000C407.813213,221.485861,407.813213,226.554139,406,231.100000C405.168341,233.112586,403.780940,234.846838,402,236.100000C400.099122,237.374902,397.847897,238.025100,395.560000,237.960000L385.720000,237.960000C385.209968,237.962677,384.720052,237.761252,384.359400,237.400600C383.998748,237.039948,383.797323,236.550032,383.800000,236.040000L383.800000,211.920000C383.797323,211.409968,383.998748,210.920052,384.359400,210.559400C384.720052,210.198748,385.209968,209.997323,385.720000,210L395.560000,210C397.850058,209.940792,400.101465,210.598035,402,211.880000ZM401.280000,231.420000C404.012719,226.857923,404.012719,221.162077,401.280000,216.600000C399.882914,214.643851,397.579825,213.541388,395.180000,213.680000L387.780000,213.680000L387.780000,234.320000L395.180000,234.320000C397.582978,234.470154,399.894483,233.374833,401.300000,231.420000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
            <g id="eMGum8C5pt313_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt313"
                d="M275.130000,210.500000C275.465539,210.880008,275.644252,211.373256,275.630000,211.880000L275.630000,227.240000C275.659844,229.222257,275.177629,231.178670,274.230000,232.920000C273.325858,234.560132,271.991242,235.922408,270.370000,236.860000C268.683558,237.820268,266.770428,238.310637,264.830000,238.280000C262.870156,238.314066,260.936808,237.823824,259.230000,236.860000C257.594346,235.934459,256.250334,234.569663,255.350000,232.920000C254.394606,231.181283,253.908649,229.223667,253.940000,227.240000L253.940000,211.880000C253.925091,211.361860,254.128244,210.861233,254.500000,210.500000C254.888842,210.135268,255.407213,209.940879,255.940000,209.960000C256.446447,209.960304,256.932040,210.161736,257.290000,210.520000C257.664976,210.872303,257.875316,211.365514,257.870000,211.880000L257.870000,227.240000C257.862144,228.553756,258.207524,229.845477,258.870000,230.980000C260.087878,233.147847,262.383488,234.486953,264.870000,234.480000C266.113078,234.486258,267.336427,234.169221,268.420000,233.560000C269.495431,232.955352,270.387001,232.070694,271,231C271.670918,229.869013,272.016936,228.574905,272,227.260000L272,211.880000C271.980235,211.375926,272.151687,210.883003,272.480000,210.500000C272.822665,210.133630,273.308921,209.936203,273.810000,209.960000C274.306715,209.944410,274.786633,210.140740,275.130000,210.500000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
          </g>
          <g id="eMGum8C5pt314">
            <g id="eMGum8C5pt315_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt315"
                d="M19.520000,176.780000C21.307564,178.051780,22.695201,179.807141,23.520000,181.840000C24.451286,184.075590,24.914156,186.478432,24.880000,188.900000C24.915949,191.334679,24.453115,193.750945,23.520000,196C22.685478,198.010895,21.298661,199.744416,19.520000,201C17.619122,202.274902,15.367897,202.925100,13.080000,202.860000L3.240000,202.860000C2.200476,202.865798,1.347197,202.039184,1.320000,201L1.320000,176.820000C1.310698,176.308757,1.513407,175.816463,1.880000,175.460000C2.235072,175.091358,2.728301,174.888263,3.240000,174.900000L13.080000,174.900000C15.371106,174.832663,17.624955,175.490619,19.520000,176.780000ZM18.800000,196.320000C20.221822,194.114724,20.920911,191.521107,20.800000,188.900000C20.904318,186.278576,20.183839,183.690450,18.740000,181.500000C17.342914,179.543851,15.039825,178.441388,12.640000,178.580000L5.280000,178.580000L5.280000,199.210000L12.680000,199.210000C15.081095,199.362414,17.392209,198.271054,18.800000,196.320000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
            <g id="eMGum8C5pt316_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt316"
                d="M145.460000,199.780000C145.811102,200.128868,146.005916,200.605079,146,201.100000C146.016295,201.591003,145.819384,202.065048,145.460000,202.400000C145.079992,202.735539,144.586744,202.914252,144.080000,202.900000L130.160000,202.900000C129.649968,202.902677,129.160052,202.701252,128.799400,202.340600C128.438748,201.979948,128.237323,201.490032,128.240000,200.980000L128.240000,176.820000C128.237323,176.309968,128.438748,175.820052,128.799400,175.459400C129.160052,175.098748,129.649968,174.897323,130.160000,174.900000L144.080000,174.900000C144.591436,174.879315,145.089392,175.066950,145.460000,175.420000C145.826629,175.774967,146.023273,176.270219,146,176.780000C146.016295,177.271003,145.819384,177.745048,145.460000,178.080000C145.079992,178.415539,144.586744,178.594252,144.080000,178.580000L132.200000,178.580000L132.200000,186.740000L142.280000,186.740000C142.791436,186.719315,143.289392,186.906950,143.660000,187.260000C144.021428,187.601885,144.218175,188.082822,144.200000,188.580000C144.224962,189.078360,144.027098,189.562028,143.660000,189.900000C143.276997,190.228313,142.784074,190.399765,142.280000,190.380000L132.200000,190.380000L132.200000,199.210000L144.080000,199.210000C144.600351,199.193885,145.102694,199.401374,145.460000,199.780000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
            <g id="eMGum8C5pt317_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt317"
                d="M648.530000,175.390000C648.849971,175.730222,649.022503,176.183121,649.010000,176.650000L649.010000,200.930000C649.026206,201.450401,648.831469,201.955274,648.470000,202.330000C648.111663,202.706034,647.609044,202.909995,647.090000,202.890000C646.797409,202.893218,646.506463,202.845854,646.230000,202.750000C645.974560,202.675560,645.745621,202.529871,645.570000,202.330000L629.850000,181.850000L629.850000,201.130000C629.864034,201.600947,629.683133,202.056818,629.350000,202.390000C629.019572,202.727300,628.561799,202.908956,628.090000,202.890000C627.623731,202.910950,627.171319,202.728526,626.850000,202.390000C626.527159,202.051582,626.354154,201.597442,626.370000,201.130000L626.370000,176.810000C626.352278,176.295264,626.547639,175.796008,626.910000,175.430000C627.263035,175.072835,627.747961,174.877417,628.250000,174.890000C628.565040,174.893763,628.876772,174.954754,629.170000,175.070000C629.437098,175.173229,629.671831,175.345827,629.850000,175.570000L645.530000,196.090000L645.530000,176.650000C645.519482,176.179678,645.699855,175.725138,646.030000,175.390000C646.363182,175.056867,646.819053,174.875966,647.290000,174.890000C647.755368,174.874235,648.205733,175.055834,648.530000,175.390000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
            <g id="eMGum8C5pt318_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt318"
                d="M526.100000,188.730000C526.451653,189.094072,526.642575,189.583986,526.630000,190.090000L526.630000,199.090000C526.643963,199.794785,526.256183,200.446255,525.630000,200.770000C524.395618,201.583741,523.047712,202.210517,521.630000,202.630000C520.168252,203.074839,518.647919,203.297326,517.120000,203.290000C514.547385,203.314384,512.014424,202.655261,509.780000,201.380000C502.910317,197.350749,500.564382,188.542344,504.520000,181.630000C505.770889,179.450361,507.588513,177.650014,509.780000,176.420000C512.009920,175.132631,514.545330,174.469418,517.120000,174.500000C518.418907,174.494696,519.714104,174.638979,520.980000,174.930000C522.151533,175.205453,523.276683,175.650123,524.320000,176.250000C524.609646,176.417550,524.856186,176.650393,525.040000,176.930000C525.198202,177.196193,525.281153,177.500347,525.280000,177.810000C525.290806,178.323530,525.096463,178.820184,524.740000,179.190000C524.411558,179.563085,523.937034,179.774795,523.440000,179.770000C523.088357,179.772295,522.742702,179.678968,522.440000,179.500000C520.790791,178.712161,518.987704,178.298954,517.160000,178.290000C513.425046,178.260178,509.972490,180.274169,508.160000,183.540000C506.312137,186.863769,506.312137,190.906231,508.160000,194.230000C509.052705,195.821845,510.349712,197.149898,511.920000,198.080000C513.510556,199.025279,515.329824,199.516412,517.180000,199.500000C518.142432,199.493261,519.101323,199.382620,520.040000,199.170000C520.930543,198.994359,521.796753,198.712337,522.620000,198.330000L522.620000,192L517.770000,192C517.265371,192.010628,516.778091,191.815716,516.420000,191.460000C516.044360,191.117346,515.836316,190.628262,515.850000,190.120000C515.844594,189.609146,516.045142,189.117639,516.406391,188.756391C516.767639,188.395142,517.259146,188.194594,517.770000,188.200000L524.770000,188.200000C525.267333,188.186368,525.748350,188.378051,526.100000,188.730000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
            <g id="eMGum8C5pt319_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt319"
                d="M396.430000,202.330000C396.055867,202.695827,395.553263,202.900458,395.030000,202.900000C394.496814,202.922507,393.979645,202.714911,393.610000,202.330000C393.249093,201.958976,393.054222,201.457362,393.070000,200.940000L393.070000,176.820000C393.060698,176.308757,393.263407,175.816463,393.630000,175.460000C394.420710,174.710781,395.659290,174.710781,396.450000,175.460000C396.830271,175.808579,397.041669,176.304270,397.030000,176.820000L397.030000,200.940000C397.042689,201.468742,396.823478,201.976582,396.430000,202.330000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
            <g id="eMGum8C5pt320_to" transform="translate(-1.270000,-5.430000)">
              <path
                id="eMGum8C5pt320"
                d="M259.790000,202.480000C258.206529,201.874845,256.753671,200.971901,255.510000,199.820000C254.995390,199.424910,254.686707,198.818568,254.670000,198.170000C254.671691,197.681363,254.874183,197.214908,255.230000,196.880000C255.565177,196.503337,256.045801,196.288512,256.550000,196.290000C256.980765,196.281805,257.397454,196.443452,257.710000,196.740000C258.671571,197.657175,259.789085,198.395411,261.010000,198.920000C262.239114,199.401386,263.550119,199.639133,264.870000,199.620000C266.374007,199.667669,267.857802,199.263631,269.130000,198.460000C270.185414,197.862703,270.846979,196.752490,270.870000,195.540000C270.886796,194.237758,270.228514,193.019559,269.130000,192.320000C267.531510,191.380592,265.776796,190.736971,263.950000,190.420000C261.636189,190.054653,259.453953,189.104657,257.610000,187.660000C256.100734,186.311406,255.284305,184.351242,255.390000,182.330000C255.358445,180.857149,255.792374,179.411886,256.630000,178.200000C257.492992,176.978328,258.686255,176.027880,260.070000,175.460000C261.648164,174.779931,263.351669,174.439230,265.070000,174.460000C266.664097,174.448843,268.247894,174.716193,269.750000,175.250000C271.071640,175.705219,272.284030,176.430610,273.310000,177.380000C273.858816,177.786590,274.196444,178.417806,274.230000,179.100000C274.228537,179.581737,274.034033,180.042785,273.690000,180.380000C273.354134,180.740375,272.882609,180.943493,272.390000,180.940000C272.054050,180.952516,271.725668,180.838296,271.470000,180.620000C270.640330,179.842727,269.660165,179.243737,268.590000,178.860000C267.472470,178.399244,266.278595,178.151650,265.070000,178.130000C263.569409,178.050847,262.081159,178.438630,260.810000,179.240000C259.821126,179.893512,259.226246,180.999695,259.226246,182.185000C259.226246,183.370305,259.821126,184.476488,260.810000,185.130000C262.262929,185.986505,263.853020,186.585327,265.510000,186.900000C267.263683,187.244095,268.974036,187.780676,270.610000,188.500000C271.853418,189.043804,272.915226,189.932114,273.670000,191.060000C274.442724,192.349556,274.818365,193.838206,274.750000,195.340000C274.766049,196.816668,274.310642,198.259958,273.450000,199.460000C272.541496,200.690576,271.318809,201.654220,269.910000,202.250000C268.359593,202.928847,266.682396,203.269740,264.990000,203.250000C263.224991,203.299130,261.465030,203.038521,259.790000,202.480000Z"
                transform="translate(0,0)"
                fill="rgb(225,177,106)"
                stroke="none"
                stroke-width="1"
                stroke-miterlimit="1"
              />
            </g>
          </g>
        </svg>
      </LogoContainer>
    </PreloaderContainer>
  );
};
export default Preloader;
