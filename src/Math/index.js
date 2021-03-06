/**
 * Tells you whether n is in an open or closed interval
 * @param { Float } n
 * @param { Float } a
 * @param { Float } b
 * @param { Boolean } lClosed [with default]
 * @param { Boolean } rClosed [with default]
 * @return { Boolean }
 *
 * [TODO] Figure out how to curry this, maybe with options!
 */

export function inRange(n, a, b, lClosed = true, rClosed = true) {
  let temp = a
  a = a > b? b : a
  b = temp > b? temp : b
  
  return do {
    if (lClosed && rClosed)
      n >= a && n <= b
    else if (!lClosed && rClosed)
      n > a && n <= b
    else if (lClosed && !rClosed)
      n >= a && n < b
    else if (!lClosed && !rClosed)
      n > a && n < b
    else
      false
  }
}


/**
 * Converts an interval to another and pinpoints the equivalency of a number
 * @param { Float } a1
 * @param { Float } b1
 * @param { Float } a2
 * @param { Float } b2
 * @param { Float } num
 * @return { Float }
 *
 * Algorithm semantics
 * -------------------
 * 
 * The equivalency of n from the scaled interval in the original interval
 * is equal to the left side of the original interval plus the distance
 * between the original interval times the percentage; and this percentage
 * is obtained by computing the distance between the number and the
 * left side of the scaled interval.
 */

export function scale(a1, b1, a2, b2, num) {
  return a1 + (((num - a2) / (b2 - a2)) * (b1 - a1))
}