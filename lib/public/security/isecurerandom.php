<?php
/**
 * Copyright (c) 2014 Lukas Reschke <lukas@owncloud.com>
 * This file is licensed under the Affero General Public License version 3 or
 * later.
 * See the COPYING-README file.
 */

namespace OCP\Security;

/**
 * Class SecureRandom provides a layer around RandomLib to generate
 * secure random numbers.
 *
 * Usage:
 * $rng = new \OC\Security\SecureRandom();
 * $randomString = $rng->getMediumStrengthGenerator()->generateString(30);
 *
 * @package OCP\Security
 */
interface ISecureRandom {

	/**
	 * Convenience method to get a low strength random number generator.
	 *
	 * Low Strength should be used anywhere that random strings are needed
	 * in a non-cryptographical setting. They are not strong enough to be
	 * used as keys or salts. They are however useful for one-time use tokens.
	 *
	 * @return $this
	 */
	public function getLowStrengthGenerator();

	/**
	 * Convenience method to get a medium strength random number generator.
	 *
	 * Medium Strength should be used for most needs of a cryptographic nature.
	 * They are strong enough to be used as keys and salts. However, they do
	 * take some time and resources to generate, so they should not be over-used
	 *
	 * @return $this
	 */
	public function getMediumStrengthGenerator();

	/**
	 * Generate a random string of specified length.
	 * @param string $length The length of the generated string
	 * @param string $characters An optional list of characters to use
	 * @return string
	 * @throws \Exception
	 */
	public function generate($length, $characters = '');
}
