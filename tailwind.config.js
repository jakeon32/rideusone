/**
 * RIDEUS - Tailwind CSS Configuration
 * 모든 HTML 파일에서 공통으로 사용하는 Tailwind 설정
 */
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#4ECDC4', // Mint Blue
                primaryHover: '#3EB9B1',
                secondary: '#FF6B35', // Coral Orange
                accent: '#FFE66D',
                success: '#95E1D3',
            },
            fontFamily: {
                sans: ['Pretendard', 'sans-serif'],
            }
        }
    }
}
