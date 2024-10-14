import React from 'react';

const featuresData = [
  {
    hashtag: '#Ingredient Analyzer',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="76" viewBox="0 0 81 76" fill="none">
                <rect x="0.5" y="0.5" width="80" height="75" rx="12" fill="#DFD6F4"/>
                <path d="M58.0587 25.7283C57.9271 25.625 57.7698 25.5586 57.6033 25.5361C57.4368 25.5136 57.2672 25.5359 57.1124 25.6005L42.0523 32.0423C41.3975 32.3241 40.5774 32.4581 39.7356 32.4581C38.5616 32.4627 37.3472 32.1932 36.5006 31.8267C36.2425 31.7196 35.9969 31.5854 35.7679 31.4263C35.8313 31.3955 35.9066 31.3627 35.9939 31.3277L49.6915 25.4696L51.7338 26.332V23.811C51.7363 23.6313 51.6979 23.4534 51.6216 23.2903C51.5452 23.1271 51.4328 22.983 51.2926 22.8685C51.1621 22.7643 51.0053 22.6972 50.839 22.6747C50.6727 22.6522 50.5034 22.675 50.3494 22.7407L35.2893 29.1825C34.8247 29.3673 34.4256 29.5952 34.0888 29.9263C33.6993 30.3066 33.4779 30.8237 33.473 31.3647C33.473 31.3801 33.4777 31.4063 33.4777 31.4063V54.0904L33.4746 54.1212L33.4793 54.1366V54.1613H33.4824C33.5136 54.9544 33.9189 55.4595 34.3055 55.8168C35.5216 56.8763 37.5639 57.4692 39.7371 57.5C40.7661 57.5 41.8106 57.346 42.7772 56.9364L57.842 50.493C58.2395 50.3236 58.4999 49.9032 58.4999 49.4273V26.6708C58.5024 26.4911 58.4641 26.3131 58.3877 26.15C58.3113 25.9869 58.1989 25.8428 58.0587 25.7283ZM48.5066 21.4163C48.4801 21.0775 48.3382 20.7541 48.0857 20.5601C47.9541 20.4568 47.7968 20.3904 47.6303 20.3679C47.4637 20.3454 47.2942 20.3676 47.1393 20.4323L32.0793 26.871C31.4245 27.1513 30.6029 27.2868 29.7626 27.2868C28.5886 27.2899 27.3742 27.0204 26.5276 26.6523C26.2696 26.5462 26.024 26.413 25.7949 26.255C25.8583 26.2242 25.9336 26.1913 26.0209 26.1564L39.72 20.2983L41.7623 21.1607V18.6428C41.7646 18.463 41.7261 18.2849 41.6494 18.1218C41.5728 17.9587 41.4601 17.8146 41.3195 17.7003C41.1881 17.5973 41.0311 17.531 40.8649 17.5085C40.6987 17.4861 40.5294 17.5081 40.3748 17.5725L25.3147 24.0158C24.8501 24.2006 24.4526 24.427 24.1143 24.7597C23.7253 25.1402 23.5045 25.6573 23.5 26.198C23.5 26.2165 23.5047 26.2411 23.5047 26.2411V48.9977H23.5078C23.539 49.7908 23.9443 50.2959 24.331 50.6532C25.547 51.7127 27.5893 52.3041 29.7641 52.3349C30.3547 52.3311 30.9434 52.2681 31.5211 52.147V31.4047C31.5055 30.3267 31.9421 29.2919 32.7091 28.5465C33.2412 28.0381 33.8724 27.642 34.5643 27.3823L48.5066 21.4163Z" fill="#7751FF"/>
                </svg>`,
    title: 'Expert Analyazation of Ingredients',
    description:
      'Get Ingredient Analyzation about the food',
    button: 'Analyzer',
  },
  {
    hashtag: '#Chipprediction',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="76" viewBox="0 0 81 76" fill="none">
  <rect x="0.833008" y="0.5" width="80" height="75" rx="12" fill="#CAF2DE"/>
  <path d="M22.8431 42.9347L23.8773 46.7991C25.0854 51.3096 25.6914 53.5658 27.0616 55.028C28.143 56.1817 29.542 56.9891 31.082 57.3482C33.0342 57.8042 35.2904 57.2002 39.8029 55.9921C44.3113 54.7839 46.5676 54.1799 48.0297 52.8097C48.151 52.6951 48.2684 52.5777 48.3817 52.4577C47.7005 52.3963 47.0233 52.2961 46.3535 52.1577C44.9614 51.8816 43.3072 51.4376 41.351 50.9135L41.137 50.8555L41.087 50.8435C38.9588 50.2715 37.1806 49.7954 35.7605 49.2834C34.2663 48.7433 32.9102 48.0773 31.7561 46.9972C30.1685 45.5098 29.0576 43.5852 28.5637 41.4666C28.2037 39.9284 28.3077 38.4203 28.5877 36.8581C28.8558 35.36 29.3358 33.5638 29.9119 31.4136L30.982 27.4252L31.018 27.2852C27.1776 28.3193 25.1554 28.9313 23.8072 30.1934C22.6521 31.2757 21.844 32.6762 21.485 34.2179C21.029 36.1681 21.633 38.4243 22.8431 42.9347Z" fill="#00692A"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M58.9968 34.9318L57.9607 38.7961C56.7505 43.3066 56.1465 45.5628 54.7763 47.025C53.6952 48.1794 52.2962 48.9875 50.7559 49.3472C50.5626 49.3926 50.3659 49.4272 50.1659 49.4512C48.3357 49.6772 46.1015 49.0792 42.0371 47.9911C37.5266 46.781 35.2704 46.1769 33.8082 44.8068C32.6534 43.7251 31.8453 42.3253 31.486 40.7843C31.0299 38.8321 31.634 36.5779 32.8441 32.0675L33.8782 28.2031L34.3663 26.3929C35.2764 23.0606 35.8884 21.2264 37.0626 19.9722C38.144 18.8185 39.543 18.0111 41.083 17.652C43.0352 17.196 45.2914 17.8 49.8038 19.0101C54.3123 20.2183 56.5685 20.8223 58.0307 22.1905C59.1858 23.2727 59.994 24.6732 60.3529 26.2149C60.809 28.1671 60.2049 30.4213 58.9968 34.9318ZM39.4368 33.1116C39.4878 32.9212 39.5759 32.7428 39.6959 32.5866C39.8159 32.4303 39.9656 32.2992 40.1363 32.2007C40.307 32.1023 40.4954 32.0384 40.6908 32.0128C40.8862 31.9872 41.0847 32.0003 41.275 32.0515L50.936 34.6417C51.1313 34.688 51.3153 34.7731 51.4772 34.8918C51.639 35.0106 51.7754 35.1606 51.8783 35.333C51.9811 35.5054 52.0483 35.6967 52.0758 35.8955C52.1033 36.0944 52.0907 36.2967 52.0386 36.4906C51.9865 36.6845 51.8961 36.8659 51.7726 37.0242C51.6491 37.1825 51.4951 37.3143 51.3197 37.412C51.1444 37.5097 50.9512 37.5712 50.7516 37.5928C50.552 37.6145 50.3501 37.5958 50.1579 37.538L40.4969 34.9498C40.113 34.8466 39.7857 34.5953 39.5869 34.251C39.3881 33.9067 39.3341 33.4956 39.4368 33.1116ZM37.8846 38.9102C37.9878 38.5262 38.2391 38.1989 38.5834 38.0001C38.9276 37.8014 39.3368 37.7474 39.7208 37.85L45.5174 39.4042C45.7137 39.4495 45.8988 39.5339 46.0618 39.6522C46.2247 39.7706 46.3622 39.9206 46.4659 40.0933C46.5696 40.2659 46.6376 40.4577 46.6656 40.6571C46.6936 40.8566 46.6812 41.0597 46.6291 41.2542C46.5769 41.4488 46.4862 41.6308 46.3622 41.7895C46.2381 41.9483 46.0834 42.0804 45.9073 42.178C45.7311 42.2757 45.5371 42.3368 45.3368 42.3579C45.1364 42.3789 44.9339 42.3594 44.7413 42.3005L38.9447 40.7483C38.7544 40.6973 38.576 40.6092 38.4197 40.4892C38.2634 40.3692 38.1323 40.2196 38.0339 40.0489C37.9354 39.8782 37.8716 39.6897 37.846 39.4944C37.8204 39.299 37.8335 39.1005 37.8846 38.9102Z" fill="#00692A"/>
</svg>`,
    title: 'Chips and Detect ',
    description:
      'upload your chips to detect defective or not defective',
    button: 'Defector',
  },
  {
    hashtag: '#Nutrient Analyzer',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="76" viewBox="0 0 81 76" fill="none">
  <rect x="0.166992" y="0.5" width="80" height="75" rx="12" fill="#F7D8D6"/>
  <path d="M55.4795 24.5H24.8545C24.2743 24.5 23.7179 24.7305 23.3077 25.1407C22.8975 25.5509 22.667 26.1073 22.667 26.6875V48.5625C22.667 49.1427 22.8975 49.6991 23.3077 50.1093C23.7179 50.5195 24.2743 50.75 24.8545 50.75H55.4795C56.0597 50.75 56.6161 50.5195 57.0263 50.1093C57.4365 49.6991 57.667 49.1427 57.667 48.5625V26.6875C57.667 26.1073 57.4365 25.5509 57.0263 25.1407C56.6161 24.7305 56.0597 24.5 55.4795 24.5ZM41.2607 42H30.3232C30.0332 42 29.755 41.8848 29.5498 41.6796C29.3447 41.4745 29.2295 41.1963 29.2295 40.9062C29.2295 40.6162 29.3447 40.338 29.5498 40.1329C29.755 39.9277 30.0332 39.8125 30.3232 39.8125H41.2607C41.5508 39.8125 41.829 39.9277 42.0341 40.1329C42.2393 40.338 42.3545 40.6162 42.3545 40.9062C42.3545 41.1963 42.2393 41.4745 42.0341 41.6796C41.829 41.8848 41.5508 42 41.2607 42ZM50.0107 37.625H30.3232C30.0332 37.625 29.755 37.5098 29.5498 37.3046C29.3447 37.0995 29.2295 36.8213 29.2295 36.5312C29.2295 36.2412 29.3447 35.963 29.5498 35.7579C29.755 35.5527 30.0332 35.4375 30.3232 35.4375H50.0107C50.3008 35.4375 50.579 35.5527 50.7841 35.7579C50.9893 35.963 51.1045 36.2412 51.1045 36.5312C51.1045 36.8213 50.9893 37.0995 50.7841 37.3046C50.579 37.5098 50.3008 37.625 50.0107 37.625ZM50.0107 33.25H30.3232C30.0332 33.25 29.755 33.1348 29.5498 32.9296C29.3447 32.7245 29.2295 32.4463 29.2295 32.1562C29.2295 31.8662 29.3447 31.588 29.5498 31.3829C29.755 31.1777 30.0332 31.0625 30.3232 31.0625H50.0107C50.3008 31.0625 50.579 31.1777 50.7841 31.3829C50.9893 31.588 51.1045 31.8662 51.1045 32.1562C51.1045 32.4463 50.9893 32.7245 50.7841 32.9296C50.579 33.1348 50.3008 33.25 50.0107 33.25Z" fill="#C54330"/>
</svg>`,
    title: 'Eat Your Nutrient',
    description:
      'Enter the food items and get nutrients details',
    button: 'Nutrient Analyzer',
  },

  {
    hashtag: '#DiseasePredictor',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="81" height="76" viewBox="0 0 81 76" fill="none">
  <rect x="0.5" y="0.5" width="80" height="75" rx="12" fill="#D3DCFB"/>
  <path d="M31.75 16.5V58.0625H27.375C25.0694 58.0625 23 55.9844 23 53.6875V20.875C23 18.5694 25.0781 16.5 27.375 16.5H31.75ZM51.4375 16.5C54.9331 16.5 58 19.3438 58 23.0625V51.5C58 55.2188 54.9375 58.0625 51.4375 58.0625H36.125V16.5H51.4375Z" fill="#3049A2"/>
</svg>`,
    title: 'Predicting diseases',
    description:
      'Predicting Possible disease becuase of certain ingredients',
    button: 'Disease Predictor',
  },
];

const Features = () => {
  return (
    <div className="bg-[#1F2937] pb-[45px]">
      <div className="flex flex-col items-center space-y-3 ">
        <p className="mt-12 font-manrope text-[30px] font-semibold text-white">
          Features
        </p>
        <p className=" text-[20px] font-inter text-white text-center">
          Why Choose Food Safety?
        </p>
      </div>
      <div className="items-center mt-8  bg-[#30599D] mx-8 md:mx-40  rounded-lg pt-4 pb-4  px-16 md:px-4 ">
        <div className="flex flex-col md:flex-row md:justify-around md:space-x-3">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white md:w-[20%] my-4 rounded-lg flex flex-col items-center justify-between space-y-4  pb-3"
            >
              <div className="bg-[#F9F5FF] px-4 py-[4px] rounded-full text-center mt-3 flex justify-center items-center">
                <a
                  href="/frontend"
                  className="text-[#4F4F4F] font-inter font-semibold text-[13px]"
                >
                  {feature.hashtag}
                </a>
              </div>
              <div dangerouslySetInnerHTML={{ __html: feature.svg }} />
              <div className="w-[70%] text-[#252525] text-center font-inter font-semibold text-[13px]">
                <p>{feature.title}</p>
              </div>
              <div className="w-[85%] text-[#6D6D6D] text-[11px] font-inter text-center">
                <p>{feature.description}</p>
              </div>
              <div className="border border-[#B0B0B0] px-[10px] py-[5px] rounded-2xl">
                <button className="text-[#B0B0B0] text-[13px] font-inter">
                  {feature.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Features;