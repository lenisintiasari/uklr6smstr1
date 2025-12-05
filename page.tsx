import Link from "next/link";

export default function HomePage() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                padding: "60px 20px",
            }}
        >
            {/* Container utama */}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "50px",
                    alignItems: "center",
                    maxWidth: "1100px",
                    width: "100%",
                    background: "#fff",
                    padding: "40px",
                    borderRadius: "20px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                }}
            >
                {/* Illustration */}
                <div>
                    <img
                        src="https://akcdn.detik.net.id/community/media/visual/2021/02/26/hobi-membaca-buku-foto-freepikcom.jpeg?w=620&q=90"
                        width={250}
                        alt="Software Engineering Illustration"
                        style={{
                            border: "2px solid #eee",
                            background: "white",
                            padding: "15px",
                            borderRadius: "12px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        }}
                    />
                </div>

                {/* Description */}
                <div style={{ maxWidth: "600px" }}>
                    <h1 style={{ margin: 0, fontSize: "36px", fontWeight: "800", color: "#000" }}>DIGITAL LIBRARY</h1>

                    <p style={{ color: "#555", lineHeight: "1.7", fontSize: "17px" }}>
                        Software Engineering (Rekayasa Perangkat Lunak) di SMK Telkom Malang
                        adalah jurusan yang mempelajari pembuatan aplikasi berbasis teknologi.
                        Siswa mempelajari pemrograman, UI/UX, basis data, dan pengembangan
                        aplikasi modern sesuai kebutuhan industri.
                    </p>

                    <p style={{ color: "#555", lineHeight: "1.7", fontSize: "17px" }}>
                        Pembelajaran berbasis proyek (Project Based Learning) membantu siswa
                        memahami cara kerja programmer profesional sehingga siap menghadapi
                        dunia kerja maupun melanjutkan pendidikan ke jenjang lebih tinggi.
                    </p>

                    <h3 style={{ marginTop: "20px", color: "#c00" }}>SMK Telkom Malang</h3>
                </div>
            </div>
        </div>
    );
}