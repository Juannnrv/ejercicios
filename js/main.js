
// Búsqueda de subsecuencia en ADN

function esta_en_adn() {
    const subsecuencia = prompt("Ingrese la subsecuencia de ADN:");

    if (!subsecuencia || !/^[actg]+$/i.test(subsecuencia)) {
        alert("La subsecuencia ingresada no es válida.");
        return;
    }

    const secuencia = "gtgggggggtttatgcctttagaacagcagactactgataactccaatcctgggttgaaaatgccaagggcgccagagagccaaacgatgagcgttggaccacaaacgataaaaactcac" +
        "tttctccgtggggtgaaagcgattctttctggcccgtatccgccagcacttaaagttgcat" +
        "tcggcgcggccctaccgctgctaattggggtaattgtcctaggattgtacgtaacgctt" +
        "ggcgggcacagccgcaagaaagcccacgcagccgcgatagatgctttggtcgagaagcac" +
        "gaagcatgctacaaggtccaagcaaagattgcacacggcaggcttgccttacagtccgct" +
        "gtggtgtctgttgcggatgccagcatgcaacaactccagttcgtgcagcaaggaattctc" +
        "atgtgtgtcggagagctcgacgatatgcagaagttccggacccgactggataatgaaatcagtgccatcaaccagcgaattcccagcattgtcgaggaggtaagaaaacacaccgacgat" +
        "gcgcttgagtggaatcttgctagaaccaagaacattttagagggcactgaagagcgcctg" +
        "aaggatatgggcaatgagttggtgcgctacctagacgatgctcgcgccctcattgaaaat" +
        "gcacgtatagctgcaggatcaatgcaacacctcgttggtgatgaggtgagaaagcagctt" +
        "gctgaggttctagtaaaagttgcagaagtaagtaatggctttattgcgcttaagaagagt" +
        "gtatctggctatttggaaaaaagcagtggacttgttgctagggaagttagggcaatcctg" +
        "gatgaccgcatgcgaagcctgcggaccatgtacaaaatgtgggatgcagaacaaaactcc" +
        "gtagtcagcgtgtgtaccacgctccaaaaggcaagcatggaggctgccgcggtagcaagt";

    const secuencia_minusculas = secuencia.toLowerCase();
    const subsecuencia_minusculas = subsecuencia.toLowerCase();

    if (secuencia_minusculas.includes(subsecuencia_minusculas)) {
        alert("La subsecuencia está presente en la secuencia de ADN.");
    } else {
        alert("La subsecuencia no está presente en la secuencia de ADN.");
    }
}
