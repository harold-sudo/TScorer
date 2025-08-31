function tscorer(fst, snd) {
    if (fst === 1 && snd === 0) 
    {
        return "15 - Love";
    }
    else if (fst === 1 && snd === 1)
    {
        return "15 - 15";
    }
    else if (fst === 2 && snd === 1)
    {
        return "30 - 15";
    }
    else if (fst === 2 && snd === 2)
    {
        return "30 - 30";
    }
    return "Love - Love";
}
export default tscorer;